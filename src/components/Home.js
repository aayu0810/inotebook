import Notes from './Notes';


 export const Home = () => {

    
     return (
        <div>
         <div className = "container my-3">
            <h2> Add a note</h2>
            <form className="my-3">
  <div class="mb-3">
    <label for="inputEmail4" class="form-label">Email</label>
    <input type="email" class="form-control" id="inputEmail4"/>
  </div>
  <div class="mb-3">
    <label for="inputPassword4" class="form-label">Password</label>
    <input type="password" class="form-control" id="inputPassword4"/>
  </div>
  <div class="mb-3 form-check">
        <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
        <label class ="form-check-label" for="exampleCheck1">Check me out</label>
                 </div>
  <div class="col-12">
    <button type="submit" class="btn btn-primary">Sign in</button>
  </div>
</form>

         </div>
        
        <Notes/>
        </div>
     )
 }
