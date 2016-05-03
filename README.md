# week-13-restaurant

### Hot Restaurant

This app schedules table reservation requests. Restaurant has 5 tables; first 5 requests get a reservation. Every request thereafter is queued to a waiting list.

- Customer makes a reservation using `reservation.html`
- If table is available, reservation for table is booked
- If table is unavailable, reservation is added to waiting list

### Directory Structure

  - `server.js`
  - `package.json`
  - app/
    - data/
      - data files
    - routes/
      - `routes.js`
    - public/
      - html files
      - js/
        - `app.js`

