import React from 'react'

export default function Main() {
    return (
        <main>
        <div className="modules">
          <nav>
            <ul className="modules">
              <li className="active">
                <div className="box-link module-link active">
                  <a href="/modules/1/" className="router-link-exact-active router-link-active">1</a>
                </div>
            </li>
              <li className="">
                <div className="box-link module-link">
                  <a href="/modules/2/" className="">2</a>
                </div>
              </li>
              <li className="">
                <div className="box-link module-link">
                  <a href="/modules/3/" className="">3</a>
                </div>
              </li>
            </ul>
          </nav>
        </div>
      </main>
    )
}
