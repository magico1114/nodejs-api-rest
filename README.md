# nodejs-rest-api

### Installation
```console
npm i
```
###  Running in development
```console
npm run dev
```
The server will be start at `http://localhost:3000`

###  Running in production
```console
npm run prod
```
The server will be start at `http://localhost:8000`

### Running tests
```console
npm run test
```

### API METHODS
**Show User**
----
  Returns json data about a single user.

* **URL**

  /users/:id

* **Method:**

  `GET`
  
*  **URL Params**

   **Required:**
 
   `id=[hex]`

* **Data Params**

  None

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `{ _id : 5e4796013ded24a6c87, name : "Michael Jordan", avatar : "https://avatarfiles.alphacoders.com/163/163859.jpg" }`
 
* **Error Response:**

  * **Code:** 404 NOT FOUND <br />
    **Content:** `{ error : "User doesn't exist" }`

  OR

  * **Code:** 401 UNAUTHORIZED <br />
    **Content:** `{ error: "Invalid token" } or { error: "Missing token" }`

**Add User**
----
  Returns json data about a single user.

* **URL**

  /users/

* **Method:**

  `POST`
  
*  **URL Params**

  None

* **Data Params**

  `{ name: "Jack Sparrow", avatar: "https://avatarfiles.alphacoders.com/633/63351.jpg" }`

* **Success Response:**

  * **Code:** 201 <br />
    **Content:** `{ _id : 5e4796013ded24a6c87 }`
 
* **Error Response:**

  * **Code:** 404 NOT FOUND <br />
    **Content:** `{ error : "invalid json data" }`

  OR

  * **Code:** 401 UNAUTHORIZED <br />
    **Content:** `{ error: "Invalid token" } or { error: "Missing token" }`