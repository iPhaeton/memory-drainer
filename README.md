# memory-drainer

A nodejs API aimed at draining hos't memory

#### Starting locally
```
npm install
MEMORY=10000 npm start
```

#### Environment variables
`MEMORY` - allocated memory for the process, required
`PORT` - port to run the server, optional, default `80`

#### Endpoints
- `POST /consume` - consumes memory by pushing a passed number of elements to the array. Body `{size: 10}`.
- `POST /release` - releases some memory by popping a passed number of elements from the array. Body `{size: 10}`.
- `GET /stats` - get stats: `length` - the array length, `heapUsed` and `heapTotal` - memory consumption in Mb.
