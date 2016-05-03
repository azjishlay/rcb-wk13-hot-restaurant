# week-13-restaurant

### Hot Restaurant

This app schedules table reservation requests. Restaurant has 5 tables; first 5 requests get a reservation. Every request thereafter is queued to a waiting list.

- Customer submits a reservation via `reservation.html`
- If table is available, customer reservation for table is booked
- If table is unavailable, customer reservation is added to waiting list

### Directory Structure

```
  - server.js
  - package.json
  - app/
    - data/
      - data files
    - public/
      - html files
    - routes/
      - routing files
```

### Run

- Download required dependencies:

    ```
    npm install
    ```
- Run app:

    ```
    node server.js
    ```