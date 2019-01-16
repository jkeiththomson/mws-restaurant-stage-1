# Restaurant Reviews Project

## Table of Contents

- [Instructions](#instructions)
- [Descriptions](#descriptions)
- [Attributions](#attributions)
- [Contributing](#contributing)

## Instructions

This is my solution to the "Restaurant Reviews" project from Udacity's "Front End Web Developer" nanodegree course.

### To install and run the website:

- Download this project from this repository
- Open a terminal window and navigate to the root folder of this project on your hard drive
- In the project folder, start a simple HTTP server. You can do this using Python:
  - For Python 2.x, run python -m SimpleHTTPServer 8000 (or some other port, if port 8000 is already in use)
  - For Python 3.x, run python3 -m http.server 8000
- If you don't have Python installed, navigate to Python's website to download and install the software.
- With your server running, visit the site: http://localhost:8000

## Descriptions

The following features and enhancements have been added to satifsy the project rubric:

### Responsiveness
- Fix document and viewport declarations in HTML
- Add media queries and flexboxes to allow layout to adapt to screen dimensions
- Tweak margins and padding for better readability and design
- Make restaurant name expand vertically so cards are all the same height

### Accessibility
- Add language attribute to HTML markup
- Add alt tags for all images
- Remove the link from the header at the top of the page -- nonstandard behavior
- Add bread crumbs to main page for consistency in navigation
- Increase font size to 18px wherever possible
- Rename the "Filter results" section to "Filters:" for clarity
- Tweak focus state of some elements to make them more obvious
- Add a "skip link" to facilitate skipping the focusable elements of the map
- Add various aria roles and labels to make screen readers happy
- Add tabindex to make various elements focusable
- Display a message when filter results are empty

### Offline Mode
- User serviceworker to cache files for use offfline
- Restrict use of service worker to Chrome and Firefox

## Attributions

All the new code is my own, based on snippets from the course materials.

## Contributing

This is a class project. We will not accept pull requests.

---
