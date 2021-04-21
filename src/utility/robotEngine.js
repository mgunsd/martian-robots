export const robotEngine = (mission) => {
  let Xmax, Ymax;
  let lostGrids = [{ x: 51, y: 51 }];
  console.log(`mission1: `, mission);

  [Xmax, Ymax] = mission.shift().split(' ');
  console.log(`Xmax: `, Xmax);
  console.log(`Ymax: `, Ymax);
  console.log(`mission2: `, mission);

  const isOutOfBounds = ({ x, y }) => {
    if (x > Xmax || x < 0 || y > Ymax || y < 0) {
      return true;
    } else {
      return false;
    }
  };

  const isPitFall = (x, y) => {
    return lostGrids.some(
      (item) => JSON.stringify(item) === JSON.stringify({ x, y })
    );
  };

  const move = (direction, command, x, y) => {
    let commandsMap = {
      N: {
        L: 'W',
        R: 'E',
        F: { x, y: y + 1 },
      },
      E: {
        L: 'N',
        R: 'S',
        F: { x: x + 1, y },
      },
      S: {
        L: 'E',
        R: 'W',
        F: { x, y: y - 1 },
      },
      W: {
        L: 'S',
        R: 'N',
        F: { x: x - 1, y },
      },
    };

    return commandsMap[direction][command];
  };

  for (let i = 0; i < mission.length; i++) {
    let startPos = mission[i];
    let commSeq = mission[i + 1];
    let [x, y, direction] = mission[i].split(' ');

    console.log(`commSeq.split(''): `, commSeq.split(''));

    for (let C of commSeq.split('')) {
      console.log(`C: `, C);
      if (C !== 'F') {
        direction = move(direction, C, x, y);
      } else {
        if (isOutOfBounds(move(direction, C, x, y)) !== true) {
          direction = move(direction, C, x, y);
        } else if (!isPitFall(x, y)) {
          lostGrids.push({ x, y });
        } else {
          break;
        }
      }
    }
    console.log(`startPos: `, startPos);
    console.log(`commSeq: `, commSeq);
    i++;
    return console.log('return', x, y, direction);
  }
};
