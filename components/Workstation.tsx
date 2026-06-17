"use client";

// Isometric "AI engineer at the desk", echoing the dual monitor reference:
// a seated figure with headphones (back view), two angled monitors running a
// live chart and code, a keyboard, mouse, and phone, plus a small floating
// neural graph. Pure SVG in the site's navy / blue palette with restrained
// looping motion. Honors reduced motion via the .bob guard in globals.css.
export default function Workstation() {
  return (
    <svg
      viewBox="0 0 460 380"
      className="w-full h-auto bob"
      role="img"
      aria-label="Isometric illustration of an AI engineer working at dual monitors"
    >
      <defs>
        <linearGradient id="scr" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#0F1828" />
          <stop offset="1" stopColor="#070B14" />
        </linearGradient>
        <linearGradient id="desk" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#111827" />
          <stop offset="1" stopColor="#0A0E18" />
        </linearGradient>
      </defs>

      {/* soft ground glow */}
      <ellipse cx="230" cy="318" rx="168" ry="36" fill="#4F8FFF" opacity="0.07" />

      {/* ── desk ── */}
      <polygon points="70,256 230,170 390,256 230,342" fill="url(#desk)" stroke="#1F2740" strokeWidth="1.5" />
      <polygon points="70,256 230,342 230,356 70,270" fill="#070B12" />
      <polygon points="390,256 230,342 230,356 390,270" fill="#0A0E18" />

      {/* ── left monitor: code ── */}
      <g>
        <polygon points="132,150 196,114 196,178 132,214" fill="#0B0F18" stroke="#2C6BE0" strokeWidth="1.5" />
        <polygon points="137,152 191,120 191,172 137,204" fill="url(#scr)" />
        <g stroke="#4F8FFF" strokeWidth="2.1" strokeLinecap="round" opacity="0.85">
          <line x1="144" y1="160" x2="176" y2="143"><animate attributeName="x2" values="176;186;176" dur="4.4s" repeatCount="indefinite" /></line>
          <line x1="144" y1="168" x2="168" y2="155" stroke="#6BA5FF" />
          <line x1="144" y1="176" x2="182" y2="156"><animate attributeName="x2" values="182;170;182" dur="5.1s" repeatCount="indefinite" /></line>
          <line x1="144" y1="184" x2="172" y2="170" stroke="#2C6BE0" />
          <line x1="144" y1="192" x2="178" y2="173" />
        </g>
        <polygon points="161,200 169,196 169,210 161,214" fill="#10151F" />
        <polygon points="150,214 184,214 192,224 142,224" fill="#0C111B" stroke="#1F2740" strokeWidth="1" />
      </g>

      {/* ── right monitor: dashboard ── */}
      <g>
        <polygon points="328,150 264,114 264,178 328,214" fill="#0B0F18" stroke="#2C6BE0" strokeWidth="1.5" />
        <polygon points="323,152 269,120 269,172 323,204" fill="url(#scr)" />
        {/* live line chart */}
        <polyline
          points="278,168 290,162 302,166 314,156 326,160"
          fill="none" stroke="#4F8FFF" strokeWidth="2.3" strokeLinejoin="round" strokeLinecap="round"
        >
          <animate attributeName="points" dur="6s" repeatCount="indefinite"
            values="278,168 290,162 302,166 314,156 326,160;
                    278,164 290,168 302,158 314,162 326,150;
                    278,168 290,162 302,166 314,156 326,160" />
        </polyline>
        <circle cx="326" cy="160" r="2.4" fill="#9FC2FF">
          <animate attributeName="cy" dur="6s" repeatCount="indefinite" values="160;150;160" />
        </circle>
        {/* small bars */}
        <g fill="#2C6BE0">
          <rect x="276" y="182" width="6" height="10"><animate attributeName="height" values="10;16;10" dur="3.6s" repeatCount="indefinite" /><animate attributeName="y" values="182;176;182" dur="3.6s" repeatCount="indefinite" /></rect>
          <rect x="286" y="180" width="6" height="12" fill="#4F8FFF"><animate attributeName="height" values="12;18;12" dur="4.3s" repeatCount="indefinite" /><animate attributeName="y" values="180;174;180" dur="4.3s" repeatCount="indefinite" /></rect>
          <rect x="296" y="184" width="6" height="8"><animate attributeName="height" values="8;14;8" dur="3.9s" repeatCount="indefinite" /><animate attributeName="y" values="184;178;184" dur="3.9s" repeatCount="indefinite" /></rect>
        </g>
        <polygon points="291,200 299,196 299,210 291,214" fill="#10151F" />
        <polygon points="276,214 310,214 318,224 268,224" fill="#0C111B" stroke="#1F2740" strokeWidth="1" />
      </g>

      {/* ── floating neural graph ── */}
      <g transform="translate(330,52)">
        <g stroke="#2C6BE0" strokeWidth="1" opacity="0.5">
          <line x1="0" y1="6" x2="32" y2="-8" /><line x1="0" y1="6" x2="32" y2="20" />
          <line x1="0" y1="26" x2="32" y2="-8" /><line x1="0" y1="26" x2="32" y2="20" />
          <line x1="32" y1="-8" x2="62" y2="6" /><line x1="32" y1="20" x2="62" y2="6" />
        </g>
        <g fill="#4F8FFF">
          <circle cx="0" cy="6" r="3"><animate attributeName="r" values="3;4.2;3" dur="2.6s" repeatCount="indefinite" /></circle>
          <circle cx="0" cy="26" r="3"><animate attributeName="r" values="3;4.2;3" dur="3.2s" repeatCount="indefinite" /></circle>
          <circle cx="32" cy="-8" r="3" fill="#6BA5FF" />
          <circle cx="32" cy="20" r="3" fill="#6BA5FF" />
          <circle cx="62" cy="6" r="3.6" fill="#9FC2FF"><animate attributeName="r" values="3.6;4.8;3.6" dur="3s" repeatCount="indefinite" /></circle>
        </g>
      </g>

      {/* ── keyboard + mouse + phone on the desk ── */}
      <polygon points="196,250 256,216 300,238 240,272" fill="#0C111B" stroke="#1F2740" strokeWidth="1" />
      <g stroke="#2C6BE0" strokeWidth="0.8" opacity="0.4">
        <line x1="210" y1="248" x2="258" y2="231" />
        <line x1="218" y1="254" x2="266" y2="237" />
      </g>
      <ellipse cx="312" cy="244" rx="9" ry="5" fill="#0C111B" stroke="#1F2740" strokeWidth="1" />
      <polygon points="170,250 188,240 196,245 178,255" fill="#0B0F18" stroke="#2C6BE0" strokeWidth="0.8" />

      {/* ── seated engineer, back view with headphones ── */}
      <g>
        {/* back / shoulders dome rising in front of the desk edge */}
        <path d="M182 400 C 182 338, 278 338, 278 400 Z" fill="#1B2336" stroke="#33415F" strokeWidth="1.3" />
        {/* arms reaching forward onto the desk toward the keyboard */}
        <path d="M192 360 Q 198 302 218 258" fill="none" stroke="#1B2336" strokeWidth="12" strokeLinecap="round" />
        <path d="M268 360 Q 280 300 284 252" fill="none" stroke="#1B2336" strokeWidth="12" strokeLinecap="round" />
        {/* hands resting near keyboard / mouse */}
        <circle cx="218" cy="256" r="6" fill="#161D2C" stroke="#243049" strokeWidth="1" />
        <circle cx="286" cy="250" r="6" fill="#161D2C" stroke="#243049" strokeWidth="1" />
        {/* neck + head (back of head) */}
        <rect x="223" y="332" width="14" height="12" rx="5" fill="#161D2C" />
        <circle cx="230" cy="324" r="18" fill="#1E2942" stroke="#33415F" strokeWidth="1.3" />
        {/* headphones: band + earcups */}
        <path d="M212 320 q18 -24 36 0" fill="none" stroke="#2C6BE0" strokeWidth="3.4" strokeLinecap="round" />
        <ellipse cx="212" cy="324" rx="5" ry="8" fill="#0E1320" stroke="#4F8FFF" strokeWidth="1.4" />
        <ellipse cx="248" cy="324" rx="5" ry="8" fill="#0E1320" stroke="#4F8FFF" strokeWidth="1.4" />
      </g>

      {/* ── drifting data motes ── */}
      <g fill="#6BA5FF">
        <circle cx="200" cy="120" r="1.6"><animate attributeName="cy" values="120;106;120" dur="5s" repeatCount="indefinite" /><animate attributeName="opacity" values="0.9;0;0.9" dur="5s" repeatCount="indefinite" /></circle>
        <circle cx="262" cy="108" r="1.4"><animate attributeName="cy" values="108;94;108" dur="6.2s" repeatCount="indefinite" /><animate attributeName="opacity" values="0.8;0;0.8" dur="6.2s" repeatCount="indefinite" /></circle>
        <circle cx="300" cy="96" r="1.3"><animate attributeName="cy" values="96;82;96" dur="4.6s" repeatCount="indefinite" /><animate attributeName="opacity" values="0.7;0;0.7" dur="4.6s" repeatCount="indefinite" /></circle>
      </g>
    </svg>
  );
}
