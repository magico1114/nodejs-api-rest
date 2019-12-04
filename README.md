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

# USAGE
## Headers

**Required for all requests**
```console
    access-token: YOUR-ACCESS-TOKEN
``` 

**For POST/PATCH request**
```console
    Content-Type: application/json
```

## How to create tokens

  Edit _tools/makeToken.js with your prefered editor and set name, email and company of your API consumer. Then run:

```console
    node _tools/makeToken.js
``` 

## DEV ENVIRONMENT

  If you don't like add the access-token header into all request, copy the .env.example file to .env in your root directory. Then, replace the API_KEY value with your generated Token.


# API METHODS

# User
**Show User**
----
  Returns json data about a single user.

* **URL**

  /user/:id

* **Method:**

  `GET`
  
*  **URL Params**

   **Required:**
 
   `id=[hex]`

*  **Data Params**

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
  Returns json data with the new user id.

* **URL**

  /user/

* **Method:**

  `POST`
  
*  **URL Params**

   None

*  **Data Params**
   **Required:**
   `name=[String]`<br />
   `avatar=[String]`<br /><br />

    ```console
    { name: "Jack Sparrow", avatar: "https://avatarfiles.alphacoders.com/633/63351.jpg" }
    ```

* **Success Response:**

  * **Code:** 201 <br />
    **Content:** `{ _id : 5e4796013ded24a6c87 }`
 
* **Error Response:**

  * **Code:** 404 NOT FOUND <br />
    **Content:** `{ error : "invalid json data" }`

  OR

  * **Code:** 401 UNAUTHORIZED <br />
    **Content:** `{ error: "Invalid token" } or { error: "Missing token" }`


# Article
**Create Article**
----
  Returns json data with the new article id.

* **URL**

  /article/

* **Method:**

  `POST`
  
*  **URL Params**

   None

*  **Data Params**
   **Required:**

   `userId=[hex]`<br />
   `title=[String]`<br />
   `text=[String]`<br />
   `tags=[Array of Strings]`<br /><br />

    ```console
    { userId: "5e4796013ded24a6c87", title: Lorem Ipsum", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", tags: ["tag1", "tag2"]}
    ```

* **Success Response:**

  * **Code:** 201 <br />
    **Content:** `{ _id : 5e4796013ded24a6c87 }`
 
* **Error Response:**

  * **Code:** 404 NOT FOUND <br />
    **Content:** `{ error : "invalid json data" }`

**Edit Article**
----
  Returns empty json with response 204.

* **URL**

  /article/:id

* **Method:**

  `PATCH`
  
*  **URL Params**
   **Required:**
 
   `id=[hex]`

*  **Data Params**

   `userId=[hex]`<br />
   `title=[String]`<br />
   `text=[String]`<br />
   `tags=[Array of Strings]`<br /><br />

    ```console
    { userId: "5e4796013ded24a6c87", title: Lorem Ipsum", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", tags: ["tag1", "tag2"]}
    ````

* **Success Response:**

  * **Code:** 204 <br />
    **Content:** `{}`
 
* **Error Response:**

  * **Code:** 404 NOT FOUND <br />
    **Content:** `{ error : "Article doesn't exist" }`

**Delete Article**
----
  Returns json data with the new article id.

* **URL**

  /article/:id

* **Method:**

  `DELETE`
  
*  **URL Params**
   **Required:**
 
    `id=[hex]`

* **Data Params**

   none

* **Success Response:**

  * **Code:** 204 <br />
    **Content:** `{}`
 
* **Error Response:**

  * **Code:** 404 NOT FOUND <br />
    **Content:** `{ error : "Article doesn't exist" }`

**Get Articles**
----
  Returns json data with all articles (limit to 100).

* **URL**

  /article/all

* **Method:**

  `GET`
  
*  **URL Params**
   none

*  **Data Params**

   none

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `[{...Resul 1},{...Resul 2}]`
 

**Get Articles by TAG**
----
  Returns json data with all articles that contains the provided Tag/Tags (limit to 100).

* **URL**

  /article/bytag

* **Method:**

   `GET`
  
*  **URL Params**

   `tag[]=[String]`

*  **Example**

  `/article/bytag?tag[]=tag1&tag[]=tag2&tag[]=tagN`

* **Data Params**

   none

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `[{...Resul 1},{...Resul 2}]`