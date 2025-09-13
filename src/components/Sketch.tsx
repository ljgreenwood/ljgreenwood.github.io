import { useRef, useEffect } from "react";
import p5 from "p5";

export default function Sketch() {
  // Ref to hold a div element where p5 will mount
  const sketchRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!sketchRef.current) return;

    const Sketch = (p: p5) => {
      let angleX = 0;
      let angleY = 0;
      let myFont: p5.Font;

      p.setup = () => {
        p.createCanvas(180, 180, p.WEBGL);
        p.loadFont("/NewYork.otf", (font) => {
          myFont = font;
          p.textFont(myFont);
          p.textSize(24);
        });
      };

      p.draw = () => {
        p.background("#f3f4f6"); // gray - 100
        p.rotateX(angleX);
        p.rotateY(angleY);
        p.fill("pink");
        p.box(100);
        // bake this box into a tesseract

        if (myFont) {
          p.textFont(myFont);
          p.textSize(20);
          p.fill(0);

          // Move text slightly above the cube center
          p.push(); // isolate transformations
          p.translate(0, -70, 0); // y=-70 above cube
          p.rotateX(-angleX); // counter-rotate to stay upright
          p.rotateY(-angleY);
          p.textAlign(p.CENTER, p.CENTER);
          p.text("LJG", 0, 0);
          p.pop();
        }

        angleX += 0.01;
        angleY += 0.01;
      };
    };

    const p5Instance = new p5(Sketch, sketchRef.current);

    return () => {
      p5Instance.remove(); // ensures only one canvas exists
    };
  }, []);

  return <div ref={sketchRef}></div>;
}
