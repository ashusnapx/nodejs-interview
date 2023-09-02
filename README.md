```markdown
# Node.js Assignment

## Assignment Description
This repository contains code for an assignment given by Mr. Siddhant Goswami. The task is to create an HTTP server using Node.js that provides an endpoint "/getName". When this endpoint is accessed, it generates and returns 10 random names in JSON format. Additionally, it responds with a "Hello, this is Ashutosh" message for other routes.

## Code
The following Node.js code is used to implement the assignment:

```javascript
const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/getName') {
        const names = generateRandomNames(10);
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(names));
    } else {
        // Handle other routes
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Hello, this is Ashutosh');
    }
});

server.listen(8000, '127.0.0.1', () => {
    console.log('Listening on port 8000');
});

function generateRandomNames(count) {
    const names = [];
    const sampleNames = ['Alice', 'Bob', 'Charlie', 'David', 'Eva', 'Frank', 'Grace', 'Hannah', 'Ivy', 'Jack'];

    for (let i = 0; i < count; i++) {
        const randomIndex = Math.floor(Math.random() * sampleNames.length);
        names.push(sampleNames[randomIndex]);
    }

    return names;
}
```

## Output
When the "/getName" endpoint is accessed, it returns a JSON array of 10 random names. For other routes, it responds with a "Hello, this is Ashutosh" message.

## Screenshots and GIF

1. **Code Screenshot:**
   ![Code Screenshot](https://i.postimg.cc/7hxGX41c/Screenshot-2023-09-02-at-11-46-30-PM.png)

2. **Output Screenshot:**
   ![Output Screenshot](https://i.postimg.cc/26NBbh1C/Screenshot-2023-09-02-at-11-45-42-PM.png)

3. **Demo GIF:**
   ![Demo GIF](https://im.ezgif.com/tmp/ezgif-1-6f8f115115.gif)
