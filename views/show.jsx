const React = require('react')
const breads = require('../controllers/breads_controller')
const Default = require('./layouts/Default')

function Show ({bread}) {
      return (
        <Default>
            <h3>{bread.name}</h3>
            <p>
             and it
              {
                bread.hasGluten
                ? <span> does </span>
                : <span> does NOT </span>
               }
               have gluten.
            </p>
            <img src={bread.image} alt={bread.name} />
            <p>{bread.getBakedBy()}</p>
            <p>Baker Joey Daked: </p>
            <a href={`/breads/${bread.id}/edit`}><button>Edit</button></a>          
            <form action={`/breads/${bread.id}?_method=DELETE`} method="POST">
              <input type='submit' value="DELETE"/>
            </form>
            <div className="newButton">
                 <a href="/breads/"><button>Go Home</button></a>
            </div>
        </Default>
      )
  }

module.exports = Show
