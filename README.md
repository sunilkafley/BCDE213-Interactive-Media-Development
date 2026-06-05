<!-- Project Title:
The project title for interactive mobile friendly responsive map of Christchurch fruit trees is selected as Fruit Finder.

1. Application Goal

The primary purpose of Fruit Finder is to help users discover fruit trees nearby. When the application is opened first, they are requested for the location access permission. If they grant permission to location, they will have access to the application where they find their current location.

They can see fruit tree icons and click on them to find their information and navigate to the fruit trees. They will not contribute new fruit tree locations. The data is the ultimate source for fruit trees.

2. Target Users

City Residents, Visitors and everyone in the city

3. Success Criteria

The application is working properly and users can navigate to the desired fruit tree from current location. They can search for fruit trees and map properly filters those trees. The application is scalable, user friendly , accessible. All the functions are working. We should create test for functional testing and usability testing. We shall create Unit Test- Jasmine for testing.

4. Layout Requirements

Mobile & Tablet

┌───────────────────────────────────────────────────────────┐
│ Header Section |
│ Logo How to use Fruit Finder Map Disclaimer Icon │
├───────────────────────────────────────────────────────────┤
│ Search Bar Search Icon │
├───────────────────────────────────────────────────────────┤
│ │
│ Map Floating Controls │
│ │
├───────────────────────────────────────────────────────────┤
│ Fruit Legend Chevron Up │
├───────────────────────────────────────────────────────────┤
│ Footer Logo 2026 Copyright Developer │
| Fruitfinder Sunil Kafley │
└───────────────────────────────────────────────────────────┘

Desktop & Large Monitor

┌───────────────────────────────────────────────────────────┐
│ Header Section |
│ Logo How to use Fruit Finder Map Disclaimer Icon │
├───────────────────────────────────────────────────────────┤
│ Fruit Legend | Search Bar Search Icon │
├───────────────|───────────────────────────────────────────┤
│ | │
│ | Map Floating Controls │
│ | │
| | |
│ | │
├───────────────────────────────────────────────────────────┤
│ Footer Logo 2026 Copyright Developer │
| Fruitfinder Sunil Kafley │
└───────────────────────────────────────────────────────────┘

With mobile and tablet, the immediate visibility is minimal Header and Footer, Map with floating controls (Most space in the screen), Search bar,Fruit Legend as Chevron Up as in the layout. The tablet view is not stretched of mobile. It is responsive according to the screen size.

With desktop and large monitors, the visual content should be centred as in the professional websites. The header section, Fruit legend on the left hand side, Search section and Map with floating controls, footer section.

Technical Requirements

1. Modern Vanilla JavaScript
2. Leaflet JS (Official Tutorial, Recommended Attributes and Follow every compliance)
3. Mobile-first
4. Accessibility Requirements as per NZ Government Web Accessibility Standard 1.2, which requires conformance to WCAG 2.2 at Level AA
5. Performance targets : High performance with low data usage

Acceptance Process

Phase 1 - Requirements: layout, features, constraints
Phase 2 - Browser Verification - Screenshots, what works, what breaks, reproduction steps (prototypes)
Phase 3 - Design Decisions
Problem
↓
Desired Behaviour
↓
Proposed Solution
↓
Approval
↓
Implementation

Phase 4 - Implementation

Only after approval.

One change at a time.

Test in browser.

Verify.

Commit.

Move to next change

CSS Unit Standard

• rem = default sizing unit
• % = fluid widths/layouts
• vh = viewport-driven components
• px = third-party library exceptions only

All new UI work should use design tokens from variables.css. -->

# Fruit Finder Christchurch 🍎🌳

A community-driven interactive map application that helps people discover publicly accessible fruit and nut trees across Christchurch, New Zealand.

Fruit Finder combines geospatial data, seasonal fruit information, filtering, routing, and community foraging guidance into a mobile-first web application built with Leaflet and OpenStreetMap.

---

## Project Overview

Fruit Finder allows users to:

- Discover edible fruit and nut trees around Christchurch
- Filter trees by fruit type
- View seasonal fruit information
- See tree descriptions and ripeness information
- Navigate to selected trees using in-app routing
- Learn responsible community foraging practices

The project is designed as a modern, mobile-first mapping application and educational resource.

---

# Current Features

## Interactive Map

- Leaflet map integration
- OpenStreetMap basemap
- Marker clustering
- Mobile-first design
- Responsive layout

---

## Fruit Filtering

Users can filter visible trees by fruit type.

Features:

- Multi-select filtering
- Dynamic filter chips
- Active filter count
- Marker visibility filtering
- Default view shows all fruit trees

Supported fruit types currently include:

- Apple
- Crabapple
- Pear
- Plum
- Olive
- Walnut
- Cherry
- Feijoa
- Fig
- Hazelnut
- Quince
- Peach
- Nectarine
- Persimmon
- Mulberry
- Medlar
- Loquat
- Chestnut
- Almond
- And others

---

## Popup Information Cards

Each tree includes:

- Fruit image (where available)
- Common name
- Description
- Best season
- Ripeness status

Popup data is driven by a centralized metadata registry rather than directly from GeoJSON.

---

## Fruit Metadata Registry

Centralized fruit metadata system includes:

- Display name
- Description
- Best season
- Ripe months
- Marker icon
- Image path
- Image availability flag

Current metadata records:

- 23 fruit types

---

## Onboarding System

First-time users are guided through:

### Location Permission

Explains:

- Why location is needed
- How location data is used
- Privacy considerations

### Community Foraging Guidelines

Encourages responsible harvesting practices.

Examples:

- Take only what you need
- Respect private property
- Leave fruit for others
- Harvest safely

---

## Routing Foundation

Users can generate a route from their current location to a selected fruit tree.

Implemented:

- Leaflet Routing Machine
- OpenStreetMap routing
- Route replacement
- Single active route management
- Automatic route fitting
- In-app navigation experience

Current routing state:

- Route To Tree button
- Active route rendering
- Route replacement logic

Upcoming:

- Route summary
- Distance calculation
- Travel time estimation
- Walk / Bike / Drive modes
- Clear Route control

---

# Technology Stack

## Frontend

- HTML5
- CSS3
- JavaScript (ES Modules)

## Mapping

- Leaflet
- OpenStreetMap
- Leaflet MarkerCluster
- Leaflet Routing Machine

## Data

- GeoJSON
- Custom fruit metadata registry

---

# Project Structure

```text
src/
│
├── config/
│   └── fruitLabels.js
│
├── data/
│   └── fruitMetadata.js
│
├── legend/
│   └── createFruitFilterPanel.js
│
├── map/
│   ├── controls.js
│   ├── directions.js
│   ├── initMap.js
│   ├── locationService.js
│   ├── markers.js
│   └── routeState.js
│
├── popup/
│   ├── attachPopupEvents.js
│   ├── buildPopupData.js
│   ├── createPopup.js
│   ├── getRipeStatus.js
│   └── popupTemplate.js
│
├── search/
│   ├── filters.js
│   └── search.js
│
├── services/
│   └── loadTrees.js
│
├── ui/
│   ├── guidelinesModal.js
│   ├── legendDrawer.js
│   └── onboarding.js
│
└── utils/
    ├── constants.js
    ├── filterTrees.js
    ├── fruitIcons.js
    └── helpers.js
```

---

# Design Principles

The project follows several core principles:

### Mobile First

The mobile experience is the primary design target.

### DRY

Reusable architecture over duplicated logic.

### Modular Architecture

Features are isolated into focused modules.

Examples:

- Popup system
- Routing system
- Filtering system
- Onboarding system

### Token-Based Styling

All styling is driven by:

```text
variables.css
```

including:

- Colors
- Typography
- Spacing
- Radius
- Shadows
- Transitions

### Progressive Enhancement

Features are introduced incrementally and validated before expansion.

---

# Current Milestone Status

## Completed

### CR-003D.4B-R2A Fruit Filter Panel

- Bottom sheet redesign
- Header redesign
- Footer redesign
- Marker icon integration
- Token migration
- Responsive improvements

### CR-003D.5 Interactive Fruit Filtering

- Multi-select filtering
- Active filter count
- Marker visibility updates

### CR-003D.7 Popup System

#### CR-003D.7A Popup Architecture

- createPopup.js
- popupTemplate.js
- popup module structure

#### CR-003D.7B Popup Data Model

- buildPopupData.js
- GeoJSON decoupling

#### CR-003D.7C Fruit Metadata Registry

- 23 metadata records

#### CR-003D.7D Popup UI Integration

- Metadata-driven popup content

#### CR-003D.7E Popup Card Layout

- Structured popup card
- Responsive popup styling
- Token migration

### CR-003D.8 Floating Map Controls

- Zoom In
- Zoom Out
- Reset View

### CR-003D.9 Onboarding Flow

- Location service
- Permission modal
- Community guidelines modal

### CR-003D.10A Routing Foundation

- Leaflet Routing Machine integration
- Route rendering
- Route state management
- Route replacement

### CR-003D.10B Popup Route Integration

- Route button
- Popup events
- Fruit-to-route connection

---

# Planned Features

## CR-003D.9 Onboarding Completion

- Disclaimer page
- Disclaimer redirect
- Final onboarding orchestration

---

## CR-003D.10B-R1 Route Lifecycle

- Clear Route button
- Route cleanup
- Route state management improvements

---

## CR-003D.10C Route Summary

- Distance
- Estimated walking time
- Route information card

---

## CR-003D.10D Travel Modes

- Walk
- Bike
- Drive

---

## Future Enhancements

- Seasonal filtering
- Saved favourites
- Community submissions
- Tree reporting
- Accessibility improvements
- Desktop optimization
- PWA support
- Offline support

---

# Data Source

Fruit tree data is sourced from publicly available community datasets and is intended for educational and community use.

Users should always:

- Respect private property
- Follow local regulations
- Harvest responsibly
- Verify access permissions

---

# Author

Sunil Kafley

Ara Institute of Canterbury

BCDE211 Project

Christchurch, New Zealand

---

# License

This project is provided for educational and community use.

Please verify local regulations and permissions before harvesting any fruit.
