const { ccclass, property } = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {
  @property(cc.EditBox)
  xInput: cc.EditBox = null;
  @property(cc.EditBox)
  yInput: cc.EditBox = null;
  @property(cc.Node)
  matrixContainer: cc.Node = null;
  @property(cc.Prefab)
  cellPrefab: cc.Prefab = null;
  private colors: cc.Color[] = [
    cc.Color.RED,
    cc.Color.GREEN,
    cc.Color.BLUE,
    cc.Color.YELLOW,
    cc.Color.MAGENTA,
  ];
  private matrix: cc.Node[][] = [];
  // LIFE-CYCLE CALLBACKS:

  // onLoad () {}

  start() {
    const generateButton = this.node.getChildByName("btnGenerate");
    generateButton.on(cc.Node.EventType.TOUCH_END, this.generateMatrix, this);
  }

  // update (dt) {}
  generateMatrix() {
    const x = parseInt(this.xInput.string);
    const y = parseInt(this.yInput.string);

    // Clear existing matrix
    this.matrixContainer.removeAllChildren();
    // 为每个cell设置颜色
    for (let i = 0; i < x; i++) {
      this.matrix[i] = [];
      for (let j = 0; j < y; j++) {
        const colorIndex = Math.floor(Math.random() * this.colors.length);
        const cell = cc.instantiate(this.cellPrefab);

        cell.color = this.colors[colorIndex];
        //设置cell的size
        cell.setContentSize(50, 50);
        //设置位置
        cell.setPosition(i * 60, j * 60);
        this.matrixContainer.addChild(cell);
        this.matrix[i][j] = cell;
      }
    }

    // Adjust probabilities based on neighbors
    for (let i = 1; i < x; i++) {
      for (let j = 1; j < y; j++) {
        const prevColor = this.matrix[i - 1][j].color;
        const aboveColor = this.matrix[i][j - 1].color;
        const currentColor = this.matrix[i][j].color;

        if (prevColor.equals(aboveColor)) {
          // Increase probability by Y%
          // Adjust Y as needed
          // Example: currentColor.a += 0.1; // Increase alpha by 10%
        } else {
          // Split remaining probability evenly
          // Example: currentColor.a += (1 - currentColor.a) / 3;
        }
      }
    }
  }
}
