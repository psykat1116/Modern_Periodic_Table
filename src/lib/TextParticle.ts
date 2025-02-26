export const mouse = {
  x: 0,
  y: 0,
  radius: 70,
};

export class TextParticle {
  x: number;
  y: number;
  size: number;
  baseX: number;
  baseY: number;
  density: number;
  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
    this.size = 3;
    this.baseX = this.x;
    this.baseY = this.y;
    this.density = Math.random() * 50 + 1;
  }
  draw(ctx: CanvasRenderingContext2D) {
    ctx.fillStyle = "#2e2e2e";
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.closePath();
    ctx.fill();
  }
  update(
    mouse: { x: number; y: number; radius: number },
    canvas: HTMLCanvasElement
  ) {
    const dx = mouse.x - window.innerWidth / 2 + canvas.width / 2 - this.x;
    const dy = mouse.y - window.innerHeight / 2 + canvas.height / 2 - this.y;
    const distance = Math.sqrt(dx * dx + dy * dy);
    let fDirectionX = dx / distance;
    let fDirectionY = dy / distance;
    let maxDiastance = mouse.radius;

    let force = (maxDiastance - distance) / maxDiastance;
    let directionX = fDirectionX * force * this.density;
    let directionY = fDirectionY * force * this.density;

    if (distance < maxDiastance) {
      this.x -= directionX;
      this.y -= directionY;
    } else {
      if (this.x != this.baseX) {
        let dx = this.x - this.baseX;
        this.x -= dx / 4;
      }
      if (this.y !== this.baseY) {
        let dy = this.y - this.baseY;
        this.y -= dy / 4;
      }
    }
  }
}
