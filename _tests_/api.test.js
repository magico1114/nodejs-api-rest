/* eslint-disable no-undef */
const app = require('..');
const supertest = require('supertest');
const request = supertest(app);

// TODO: create an individual file test for every component

/*
############ USER TEST ###############
*/
// TODO: Use a separate DB to do this tests. Also check the invalid requests, check the response types, check responses when User doesn't exist.


describe('User Endpoints', () => {

  let insertedUserID = "";

  it('should create a new user', async done => {
    const res = await request
        .post('/user')
        .send({
            name: "test",
            avatar: 'Avatar test',
          })
    
    expect(res.status).toBe(201)
    insertedUserID = res.body.id;
    done()
  })
  it('should get user', async done => {
    const res = await request
        .get('/user/' + insertedUserID)
        .send({})
    
    expect(res.status).toBe(200)
    done()
  })
  it('should delete user', async done => {
    const res = await request
        .delete('/user/' + insertedUserID)
        .send({})
    expect(res.status).toBe(204)
    done()
  })
})


/*
############ ARTICLE TEST ###############
*/
// TODO: Use a separate DB to do this tests. Also check the invalid requests, check the response types, check responses when Article doesn't exist.

describe('Article Endpoints', () => {

    let insertedArticleID = "";
    let insertedUserID = "";
  
    it('Create new user for Article test', async done => {
      const res = await request
          .post('/user')
          .send({
              name: "test",
              avatar: 'Avatar test',
            })
      
      expect(res.status).toBe(201)
      insertedUserID = res.body.id;
      done()
    })
  
    it('should create a new article', async done => {
      const res = await request
          .post('/article')
          .send({
            userId: insertedUserID, 
            title: "Test title",
            text: "Test text",
            tags: ["tag1","tag2","tag3"]
          })
      
      expect(res.status).toBe(201)
      insertedArticleID = res.body.id;
      done()
    })
    it('should get article', async done => {
      const res = await request
          .get('/article/' + insertedArticleID)
          .send({})
      
      expect(res.status).toBe(200)
      done()
    })
    it('should get articles by TAG', async done => {
      const res = await request
          .get('/article/bytag?tag[]=tag1')
          .send({})
      
      expect(res.status).toBe(200)
      done()
    })
    it('should delete article', async done => {
      const res = await request
          .delete('/article/' + insertedArticleID)
          .send({})
      expect(res.status).toBe(204)
      done()
    })
  
    it('Delete new user for Article test', async done => {
      const res = await request
          .delete('/user/' + insertedUserID)
          .send({})
      expect(res.status).toBe(204)
      done()
    })
  })