import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";

const GRID_ROT = -13; // tilt of the whole grid, in degrees
const RAD = Math.PI / 180;
const rand = (a, b) => a + Math.random() * (b - a);
const round = { strokeLinecap: "round", strokeLinejoin: "round" };

/* ---------- path helpers ---------- */
const spiralPath = (cx, cy, r0, r1, turns, phase = 0, n = 110) => {
  let d = "";
  for (let i = 0; i <= n; i++) {
    const t = i / n;
    const a = phase + t * turns * Math.PI * 2;
    const r = r0 + (r1 - r0) * t;
    d +=
      (i ? "L" : "M") +
      (cx + Math.cos(a) * r).toFixed(1) +
      " " +
      (cy + Math.sin(a) * r).toFixed(1);
  }
  return d;
};

const sinePath = (y, amp, wl, ph = 0) => {
  let d = "";
  for (let x = -wl; x <= 200 + wl * 3; x += 4) {
    d +=
      (d ? "L" : "M") +
      x +
      " " +
      (y + Math.sin((x / wl + ph) * Math.PI * 2) * amp).toFixed(1);
  }
  return d;
};

/* light tile = black ink on white paper, dark tile = the reverse */
const palette = (dark) => ({
  ink: dark ? "#fff" : "#000",
  paper: dark ? "#000" : "#fff",
  hatch: dark ? "url(#tg-hatch-w)" : "url(#tg-hatch-k)",
  hatch2: dark ? "url(#tg-hatch2-w)" : "url(#tg-hatch2-k)",
});

const Svg = ({ children, ...rest }) => (
  <svg
    viewBox="0 0 200 200"
    preserveAspectRatio="xMidYMid slice"
    aria-hidden="true"
    className="absolute inset-0 h-full w-full"
    {...rest}
  >
    {children}
  </svg>
);

/* a rolling wave band (loops sideways forever) */
const Layer = ({ y, amp, wl = 90, ph, dur, fill, stroke = "none", sw = 3 }) => (
  <g className="tg-lay" data-wl={wl} data-dur={dur}>
    <path
      d={`${sinePath(y, amp, wl, ph)}L${200 + wl * 3} 320L${-wl} 320Z`}
      fill={fill}
      stroke={stroke}
      strokeWidth={sw}
      {...round}
    />
  </g>
);

/* a spinning spiral, optionally with a hatched ribbon underneath */
const Spiral = ({ p, cx, cy, r0 = 3, r1, turns, phase = 0, dur, rev, ribbon, sw = 3 }) => {
  const d = spiralPath(cx, cy, r0, r1, turns, phase);
  return (
    <g className={`tg-spin${rev ? " tg-rev" : ""}`} data-o={`${cx} ${cy}`} data-dur={dur}>
      {ribbon && (
        <>
          <path d={d} fill="none" stroke={p.paper} strokeWidth={ribbon} {...round} />
          <path d={d} fill="none" stroke={p.hatch} strokeWidth={ribbon} {...round} />
        </>
      )}
      <path d={d} fill="none" stroke={p.ink} strokeWidth={sw} {...round} />
    </g>
  );
};

/* ---------- the tile drawings ---------- */
const TileCurl = ({ dark, v }) => {
  const p = palette(dark);
  const cx = 108 + (v % 2 ? -10 : 8);
  const cy = 98 + (v % 3 ? 6 : -8);
  const swell = "M0 200V150Q60 100 120 140T200 120V200Z";
  return (
    <Svg>
      <rect width="200" height="200" fill={p.paper} />
      <path d={swell} fill={p.hatch2} />
      <path d={swell} fill="none" stroke={p.ink} strokeWidth="3" {...round} />
      <Spiral p={p} cx={cx} cy={cy} r1={78} turns={3.1} dur={12 + v} ribbon={16} sw={3.2} />
      <g className="tg-spin" data-o={`${cx} ${cy}`} data-dur={12 + v}>
        <path
          d={spiralPath(cx, cy, 3, 50, 2.2, 0.9)}
          fill="none"
          stroke={p.ink}
          strokeWidth="1.6"
          {...round}
        />
      </g>
    </Svg>
  );
};

const TileCrest = ({ dark, v }) => {
  const p = palette(dark);
  const o = v * 0.2;
  return (
    <Svg>
      <rect width="200" height="200" fill={p.paper} />
      <Layer y={52} amp={12} ph={o} dur={9} fill={p.paper} stroke={p.ink} sw={2.5} />
      <Layer y={88} amp={11} ph={o + 0.3} dur={6.5} fill={p.paper} stroke={p.ink} sw={3.2} />
      <Layer y={88} amp={11} ph={o + 0.3} dur={6.5} fill={p.hatch2} />
      <Layer y={124} amp={10} ph={o + 0.6} dur={7.5} fill={p.paper} stroke={p.ink} sw={2.6} />
      <Layer y={124} amp={10} ph={o + 0.6} dur={7.5} fill={p.hatch} />
      <Layer y={160} amp={8} ph={o + 0.9} dur={5} fill={p.ink} stroke={p.ink} sw={3.4} />
    </Svg>
  );
};

const TileSwirl = ({ dark }) => {
  const p = palette(dark);
  return (
    <Svg>
      <rect width="200" height="200" fill={p.paper} />
      <Spiral p={p} cx={62} cy={72} r0={2} r1={42} turns={2.6} dur={9} ribbon={12} />
      <Spiral p={p} cx={140} cy={136} r0={2} r1={50} turns={2.8} phase={1.2} dur={11} rev ribbon={12} />
      <Layer y={176} amp={6} wl={60} ph={0.1} dur={4.5} fill={p.hatch2} stroke={p.ink} sw={2.4} />
    </Svg>
  );
};

const TileNet = ({ dark }) => {
  const p = palette(dark);
  const lines = [];
  for (let i = -140; i <= 340; i += 13) {
    lines.push(
      <line key={"v" + i} x1={i} y1={-140} x2={i} y2={340} stroke={p.ink} strokeWidth="1.4" />,
      <line key={"h" + i} x1={-140} y1={i} x2={340} y2={i} stroke={p.ink} strokeWidth="1.4" />
    );
  }
  return (
    <Svg>
      <rect width="200" height="200" fill={p.paper} />
      <g className="tg-net" data-o="100 100">{lines}</g>
      <path
        d="M-10 130Q50 50 120 100T210 70V210H-10Z"
        fill={p.paper}
        stroke={p.ink}
        strokeWidth="3.4"
        {...round}
      />
      <path d="M-10 170Q60 110 130 150T210 130V210H-10Z" fill={p.hatch2} />
      <g className="tg-spin" data-o="158 40" data-dur="8">
        <path
          d={spiralPath(158, 40, 2, 30, 2.2)}
          fill={p.paper}
          stroke={p.ink}
          strokeWidth="3"
          {...round}
        />
      </g>
    </Svg>
  );
};

const TileEye = ({ dark, flip, id }) => {
  const p = palette(dark);
  const almond = "M22 106Q100 38 178 106Q100 172 22 106Z";
  const lashes = Array.from({ length: 9 }, (_, i) => {
    const t = (i + 0.5) / 9;
    const x = 30 + t * 140;
    const y = 106 - Math.sin(t * Math.PI) * 52 + 2;
    const a = (t - 0.5) * 1.1;
    return (
      <line
        key={i}
        x1={x.toFixed(1)}
        y1={y.toFixed(1)}
        x2={(x + Math.sin(a) * 12).toFixed(1)}
        y2={(y - 11 * Math.cos(a)).toFixed(1)}
        stroke={p.ink}
        strokeWidth="2.2"
        {...round}
      />
    );
  });

  return (
    <Svg data-eye={flip ? "flip" : "eye"}>
      <g transform={flip ? "translate(200 0) scale(-1 1)" : undefined}>
        <rect width="200" height="200" fill={p.paper} />
        {/* hair strands */}
        <path d="M14 -10C38 50 26 120 56 210" fill="none" stroke={p.ink} strokeWidth="3.4" {...round} />
        <path d="M34 -10C58 40 46 110 76 210" fill="none" stroke={p.hatch} strokeWidth="7" {...round} />
        <path d="M188 -10C168 60 190 130 160 210" fill="none" stroke={p.ink} strokeWidth="3" {...round} />
        {/* brow + cheek shading */}
        <path d="M26 74Q100 4 176 74L176 52Q100 -22 26 50Z" fill={p.hatch} />
        <path d="M110 150Q170 160 200 205L110 205Z" fill={p.hatch2} />
        <path d="M112 146Q142 172 128 204" fill="none" stroke={p.ink} strokeWidth="3" {...round} />

        <clipPath id={id}>
          <path d={almond} />
        </clipPath>
        <path d={almond} fill={p.paper} />
        <g clipPath={`url(#${id})`}>
          <g className="tg-follow">
            <g className="tg-wander">
              <circle cx="100" cy="106" r="35" fill={p.paper} />
              <circle cx="100" cy="106" r="35" fill={p.hatch} stroke={p.ink} strokeWidth="3.6" />
              <circle
                cx="100"
                cy="106"
                r="26"
                fill="none"
                stroke={p.ink}
                strokeWidth="2.4"
                strokeDasharray="2 4.5"
              />
              <circle cx="100" cy="106" r="12.5" fill={p.ink} />
              <circle cx="90" cy="95" r="4.6" fill={p.paper} />
            </g>
          </g>
          <rect className="tg-lid" x="0" y="0" width="200" height="200" fill={p.paper} />
        </g>
        <path d={almond} fill="none" stroke={p.ink} strokeWidth="3.6" {...round} />
        <path d="M28 92Q100 24 172 92" fill="none" stroke={p.ink} strokeWidth="2.4" {...round} />
        {lashes}
      </g>
    </Svg>
  );
};

/* 3x3 layout: light / dark checkerboard so the eyes always sit on black */
const TILES = [
  { dark: false, art: (d) => <TileCurl dark={d} v={0} /> },
  { dark: true,  art: (d) => <TileEye dark={d} id="tg-eye-a" /> },
  { dark: false, art: (d) => <TileCrest dark={d} v={1} /> },
  { dark: true,  art: (d) => <TileCrest dark={d} v={2} /> },
  { dark: false, art: (d) => <TileSwirl dark={d} /> },
  { dark: true,  art: (d) => <TileEye dark={d} flip id="tg-eye-b" /> },
  { dark: false, art: (d) => <TileNet dark={d} /> },
  { dark: true,  art: (d) => <TileCurl dark={d} v={3} /> },
  { dark: false, art: (d) => <TileCrest dark={d} v={4} /> },
];

/* ============================================================
   COMPONENT
   ============================================================ */
const TileArt = ({ className = "" }) => {
  const root = useRef(null);

  useLayoutEffect(() => {
    const el = root.current;
    if (!el) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let alive = true;
    let idleOn = false;
    let ready = false;
    let entered = false;
    const idle = []; // every looping tween, so we can pause them off-screen
    const keep = (t) => (idle.push(t), t);
    const cleanups = [];

    const ctx = gsap.context(() => {
      const grid = el.querySelector(".tg-grid");
      const tiles = gsap.utils.toArray(".tg-tile", el);

      gsap.set(grid, { rotation: GRID_ROT });
      tiles.forEach((t, i) =>
        gsap.set(t, { rotation: reduce ? ((i % 3) - 1) * 1.5 : rand(-2.5, 2.5) })
      );
      if (reduce) return; // still image only

      /* ---- looping tweens (created paused) ---- */
      gsap.utils.toArray(".tg-spin", el).forEach((s) =>
        keep(
          gsap.to(s, {
            rotation: s.classList.contains("tg-rev") ? -360 : 360,
            svgOrigin: s.dataset.o,
            duration: +(s.dataset.dur || 10),
            ease: "none",
            repeat: -1,
            paused: true,
          })
        )
      );
      gsap.utils.toArray(".tg-lay", el).forEach((l) =>
        keep(
          gsap.to(l, {
            x: -Number(l.dataset.wl),
            duration: +l.dataset.dur,
            ease: "none",
            repeat: -1,
            paused: true,
          })
        )
      );
      gsap.utils.toArray(".tg-net", el).forEach((n) => {
        gsap.set(n, { rotation: -7, svgOrigin: n.dataset.o });
        keep(
          gsap.to(n, {
            rotation: 7,
            duration: 5,
            ease: "sine.inOut",
            yoyo: true,
            repeat: -1,
            paused: true,
          })
        );
      });
      keep(
        gsap.to(grid, {
          y: -8,
          duration: 3,
          ease: "sine.inOut",
          yoyo: true,
          repeat: -1,
          paused: true,
        })
      );

      /* ---- eyes: dart, blink, follow the cursor ---- */
      const eyes = gsap.utils.toArray("svg[data-eye]", el).map((svg) => {
        const follow = svg.querySelector(".tg-follow");
        return {
          flip: svg.dataset.eye === "flip",
          wander: svg.querySelector(".tg-wander"),
          lid: svg.querySelector(".tg-lid"),
          tile: svg.closest(".tg-tile"),
          fx: gsap.quickTo(follow, "x", { duration: 0.35, ease: "power3" }),
          fy: gsap.quickTo(follow, "y", { duration: 0.35, ease: "power3" }),
        };
      });

      eyes.forEach((e) => {
        gsap.set(e.lid, { scaleY: 0, svgOrigin: "100 0" });
        const dart = () => {
          if (!alive) return;
          if (idleOn) {
            gsap.to(e.wander, { x: rand(-7, 7), y: rand(-4, 4), duration: 0.28, ease: "power3.out" });
          }
          gsap.delayedCall(rand(1.1, 2.6), dart);
        };
        const blink = () => {
          if (!alive) return;
          if (idleOn) {
            gsap
              .timeline()
              .to(e.lid, { scaleY: 1, duration: 0.08, ease: "power2.in" })
              .to(e.lid, { scaleY: 0, duration: 0.16, ease: "power2.out" });
          }
          gsap.delayedCall(rand(2.2, 5), blink);
        };
        dart();
        blink();
      });

      const look = (ev) => {
        if (!idleOn) return;
        eyes.forEach((e) => {
          const r = e.tile.getBoundingClientRect();
          const dx = ev.clientX - (r.left + r.width / 2);
          const dy = ev.clientY - (r.top + r.height / 2);
          const a = -GRID_ROT * RAD; // undo the grid tilt
          let lx = dx * Math.cos(a) - dy * Math.sin(a);
          let ly = dx * Math.sin(a) + dy * Math.cos(a);
          const len = Math.hypot(lx, ly) || 1;
          const k = (Math.min(len / 420, 1) * 10) / len;
          lx *= k;
          ly *= k;
          e.fx(e.flip ? -lx : lx);
          e.fy(ly);
        });
      };
      window.addEventListener("pointermove", look, { passive: true });
      cleanups.push(() => window.removeEventListener("pointermove", look));

      /* ---- hover: tile lifts ---- */
      tiles.forEach((t) => {
        const enter = () =>
          ready && gsap.to(t, { scale: 1.07, zIndex: 3, duration: 0.35, ease: "back.out(2)" });
        const leave = () =>
          ready && gsap.to(t, { scale: 1, zIndex: 1, duration: 0.45, ease: "power3.out" });
        t.addEventListener("pointerenter", enter);
        t.addEventListener("pointerleave", leave);
        cleanups.push(() => {
          t.removeEventListener("pointerenter", enter);
          t.removeEventListener("pointerleave", leave);
        });
      });

      /* ---- one-shot entrance ---- */
      const entrance = gsap.from(tiles, {
        scale: 0.35,
        rotation: () => rand(-45, 45),
        opacity: 0,
        y: 90,
        duration: 1,
        ease: "back.out(1.5)",
        stagger: { each: 0.07, grid: [3, 3], from: "center" },
        paused: true,
        onComplete: () => {
          ready = true;
        },
      });

      /* ---- play when visible, pause when not ---- */
      const io = new IntersectionObserver(
        ([entry]) => {
          idleOn = entry.isIntersecting;
          idle.forEach((t) => t.paused(!idleOn));
          if (idleOn && !entered) {
            entered = true;
            entrance.play();
          }
        },
        { threshold: 0.15 }
      );
      io.observe(el);
      cleanups.push(() => io.disconnect());
    }, el);

    return () => {
      alive = false;
      cleanups.forEach((fn) => fn());
      ctx.revert();
    };
  }, []);

  return (
    <div ref={root} aria-hidden="true" className={`relative w-full ${className}`}>
      {/* shared hatch patterns: black lines (k) and white lines (w) */}
      <svg width="0" height="0" className="absolute" focusable="false">
        <defs>
          <pattern id="tg-hatch-k" width="5" height="5" patternUnits="userSpaceOnUse" patternTransform="rotate(40)">
            <line x1="0" y1="0" x2="0" y2="5" stroke="#000" strokeWidth="1.4" />
          </pattern>
          <pattern id="tg-hatch-w" width="5" height="5" patternUnits="userSpaceOnUse" patternTransform="rotate(40)">
            <line x1="0" y1="0" x2="0" y2="5" stroke="#fff" strokeWidth="1.4" />
          </pattern>
          <pattern id="tg-hatch2-k" width="9" height="9" patternUnits="userSpaceOnUse" patternTransform="rotate(-35)">
            <line x1="0" y1="0" x2="0" y2="9" stroke="#000" strokeWidth="1.1" />
          </pattern>
          <pattern id="tg-hatch2-w" width="9" height="9" patternUnits="userSpaceOnUse" patternTransform="rotate(-35)">
            <line x1="0" y1="0" x2="0" y2="9" stroke="#fff" strokeWidth="1.1" />
          </pattern>
        </defs>
      </svg>

      <div className="tg-grid grid grid-cols-3 gap-2 will-change-transform">
        {TILES.map((t, i) => (
          <div
            key={i}
            className="tg-tile relative aspect-square overflow-hidden rounded-[14px] will-change-transform"
            style={{ backgroundColor: t.dark ? "#000" : "#fff" }}
          >
            {t.art(t.dark)}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TileArt;