import classes from './MyPosts.module.css'
import NewPost from './NewPost/NewPost';
import React from 'react';
import { Field, Form, Formik } from 'formik';
import * as yup from 'yup'



const MyPosts = (props) => {


  let messageInfo = props.post.map (m => <NewPost id={m.id} key={m.id} message={m.message} likes={m.likes} reposts={m.reposts} /> )

  return <div className={classes.content}>

    <div className={classes.creatpost}>
      New Post
      </div>

    
      <AddPostForm addNews={props.addNews} />
     <div className={classes.infopost} >Your Posts:</div>  
     {messageInfo}
  </div>;
}

const AddPostForm = (props) => {

  const validationSchema = yup.object().shape({
    postMessage: yup.string().typeError('must be string')
  }
  )
  return <Formik
  initialValues={{
    postMessage: ''
  }
  }
  onSubmit={(values,{resetForm})=>{
      props.addNews(values.postMessage)
      resetForm({values:''})
  }}
validationSchema={validationSchema}
  >
    {({errors,values,handleChange,handleSubmit,})=>(
      <Form className={classes.form}>
          <div>
            <Field as='textarea'
            className={classes.post}
            type='text'
            value={values.postMessage}
            name={'postMessage'}
            onChange={handleChange}
            placeholder="Create post..."            
            />
            {errors.postMessage && <p className={classes.error}>{errors.postMessage}</p>}
            {values.postMessage && <button type='submit' onClick={handleSubmit} className={classes.button}>Post</button>}
        </div>
      </Form>
    )}
  </Formik>
}


export default MyPosts;
