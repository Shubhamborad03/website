# CLAUDE CODE PROMPT — ROOF MEASUREMENT + QUOTE
# Paste this entire prompt into Claude Code on your laptop.
# Run it: it will find the roof area and produce a quote automatically.
# No paid APIs required.

"""
You are a roof measurement agent for Sam's Roof Coatings.

I need you to measure the roof at these two addresses and produce quote estimates:

ADDRESS 1 (TARGET): 4 Richardson Ct, Tewantin QLD 4565, Australia
ADDRESS 2 (NEIGHBOUR): 6 Richardson Ct, Tewantin QLD 4565, Australia

Do the following steps IN ORDER. Write and run code at each step.

---

STEP 1 — GET COORDINATES
Use the Nominatim geocoding API (free, no key needed) to get the lat/lng for each address.
URL format: https://nominatim.openstreetmap.org/search?q={address}&format=json&limit=1
Set header: User-Agent: SamsRoofCoatings/1.0

---

STEP 2 — GET BUILDING FOOTPRINT FROM OPENSTREETMAP
Use the Overpass API to pull the building polygon for each address.
Overpass endpoint: https://overpass-api.de/api/interpreter
Query (replace LAT/LNG with real coords, use ~0.0005 degree radius):
  [out:json];
  way(around:50,LAT,LNG)[building];
  out geom;

Extract the list of lat/lng nodes that form the building polygon.

---

STEP 3 — CALCULATE FOOTPRINT AREA
Convert the polygon node coordinates to metres using the Australian Albers projection (EPSG:3577).
Use the pyproj library: pip install pyproj if not installed.
Apply the shoelace formula to get the polygon area in m².

---

STEP 4 — FETCH SATELLITE IMAGE
Use the Google Maps Static API to fetch a satellite image of each property.
BUT — Google Static API costs money. Instead, use this FREE alternative:
Fetch an OpenStreetMap tile at zoom=19 for the building's centroid:
  Tile URL formula:
    import math
    def lat_lng_to_tile(lat, lng, zoom):
        n = 2**zoom
        x = int((lng + 180) / 360 * n)
        y = int((1 - math.log(math.tan(math.radians(lat)) + 1/math.cos(math.radians(lat))) / math.pi) / 2 * n)
        return x, y
  
  Tile image URL: https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z=19
  (This fetches a Google satellite tile — free, no API key needed, 256x256 px)
  Fetch 3x3 grid of tiles centred on building, stitch them together with PIL.

Save the stitched satellite image as: satellite_{address}.jpg

---

STEP 5 — ANALYSE ROOF FROM SATELLITE IMAGE
Use the Anthropic Python SDK to send the satellite image to Claude claude-sonnet-4-20250514.
Ask Claude to:
1. Identify the roof shape (hip, gable, complex)
2. Estimate the pitch angle from shadow analysis (15°, 20°, 22°, 25°, 30°)
3. Score the condition 1-10 (look for moss/algae dark patches, fading, uneven colour)
4. Count solar panels if any
5. Note any visible damage or complexity (valleys, dormers, extensions)
6. Confirm the footprint area looks consistent with the OSM measurement

Prompt to send with image:
"This is a satellite image of a residential roof in Queensland, Australia.
The building footprint from OpenStreetMap measures [FOOTPRINT_M2] m².
Please assess:
- Roof shape and complexity (simple/moderate/complex)
- Estimated pitch in degrees (look at shadow length vs roof width)
- Condition score 1-10 (10=new, 1=critical. Look for moss, fading, cracking)
- Solar panel count
- Any notable features
Return JSON only: {shape, pitch_degrees, condition_score, condition_notes, solar_panels, complexity}"

---

STEP 6 — CALCULATE QUOTE
Use this pricing engine:

MATERIAL RATES (per m² of TRUE surface area):
  pressure_clean: 3.50
  repointing: 4.20
  tile_replacement: 1.80
  primer: 6.50
  coat_1: 7.00
  coat_2: 7.00

TRUE SURFACE AREA = footprint_m2 / cos(pitch_degrees * pi/180)

CONDITION MULTIPLIER:
  9-10 (excellent): 1.00
  7-8 (good): 1.00
  5-6 (fair): 1.15
  3-4 (poor): 1.35
  1-2 (critical): 1.55

PITCH MULTIPLIER:
  <= 20°: 1.00
  <= 25°: 1.08
  <= 30°: 1.15
  <= 35°: 1.25
  > 35°: 1.40

COMPLEXITY MULTIPLIER:
  simple (gable/hip): 1.00
  moderate: 1.08
  complex (multiple valleys): 1.15

STOREYS: add 20% if 2-storey

SOLAR: note separately — quote AU$800-1,200 for solar company to remove/reinstall

QLD WARRANTY INSURANCE: add $300 flat if total > $3,500 (legally required)

GST: 10% on everything

STANDARD PRICE = full calculation
AREA DISCOUNT PRICE = standard * 0.80 (20% off)

---

STEP 7 — OUTPUT
Print a clean summary for EACH address:

=== 4 Richardson Ct, Tewantin ===
Footprint:        XXX m²
True surface:     XXX m²
Pitch:            XX°
Condition:        X/10 — [notes]
Shape:            [shape]
Solar panels:     X

Itemised quote:
  Pressure clean:      $X,XXX
  Repointing:          $X,XXX
  Tile replacement:    $X,XXX
  Primer:              $X,XXX
  Coat 1:              $X,XXX
  Coat 2:              $X,XXX
  QLD Warranty Ins:    $300
  ─────────────────────────
  Subtotal:            $XX,XXX
  GST:                 $X,XXX
  STANDARD PRICE:      $XX,XXX
  AREA RATE (−20%):    $XX,XXX  ← USE THIS ON FLYER

Also save the satellite image to: satellite_4_richardson_ct.jpg
This image goes on the letterbox flyer — it shows the homeowner we've looked at their specific roof.

---

NOTES:
- If Overpass returns no building polygon, fall back to a 10m radius circle area estimate
- If satellite tile fetch fails, skip image analysis and use condition=6 (fair) as default
- Always show ±20% accuracy disclaimer — pitch is estimated until Sam is on-site
- The Anthropic API key should be set as ANTHROPIC_API_KEY environment variable
"""