import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
// import './Style/style1.css'
// import './style.css'
import './Style/style3.css'


// ReactDOM.render(<App />, document.getElementById('root'))

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
        <div className='back'>
            <App />
        </div>
)