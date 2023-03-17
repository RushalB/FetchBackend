# FetchBackend
Fetch Rewards Backend Assesment


# How to run

To run this project build a docker image using the Dockerfile provided
example: docker build -t fetch-app-image .

Once the image is built run the container.
example:
docker run -p 3000:3000 --name fetch-app fetch-app-image
`note: port is forwarded to 3000`

# How to test

To test the app using postman
    Make a post request to "http://localhost:3000/receipts/process"
    Add the receipt in the body and set format to JSON (in raw)
    Send the request
    If it is valid it will spit out an id for the receipt and will store the id and the calculated points(stored in memory,will erase once server is restarted)
    Or else it will give an error saying Invalid Receipt

    Make a get request to "http://localhost:3000/:id/points"
    where id will be one of ids you got from the post request
    If id exists in the memory it will give you the points for that receipt 
    Or else it will give an error saying Id not found

