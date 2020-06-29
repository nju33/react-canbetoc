import faker from 'faker'
import React from 'react'
import { Helmet } from 'react-helmet'
import { Canbetoc } from '..'
import { ExpansionStrategy } from '../strategies/expansion'

export default { title: 'Canbetoc' }

const FakeP: React.FC = () => {
  return <p>{faker.lorem.sentences()}</p>
}

const strategy = new ExpansionStrategy()

export const Expansion = (): React.ReactElement => {
  const [num, setNum] = React.useState(0)

  return (
    <>
      <Helmet>
        <link
          rel="stylesheet"
          href="/src/strategies/expansion/text-color.css"
        />
      </Helmet>
      <div className="flex relative self-start">
        <div className="flex-none w-2/6 sticky top-0 h-0">
          <button
            onClick={() => setNum(num + 1)}
            className="h-10 w-full bg-gray-200 hover:bg-gray-400 duration-100 border">
            Refresh
          </button>
          <div data-canbetoc-id="expansion" className="w-full py-2" />
        </div>
        <main>
          <Canbetoc
            id="expansion"
            selectors={['h2', 'h3', 'h4', 'h5']}
            strategy={strategy}>
            <div style={{ margin: '1500px 0' }}>
              <h2 key={Math.random()} id={num.toString()}>
                {num}
                a1a
              </h2>
              <FakeP />

              <h3 key={Math.random()} id="b1">
                b1
              </h3>
              <FakeP />
              <FakeP />
              <FakeP />

              <h4 key={Math.random()} id="c1">
                c1
              </h4>
              <FakeP />
              <FakeP />
              <FakeP />

              <h4 key={Math.random()} id="c2">
                c2
              </h4>
              <FakeP />
              <FakeP />
              <FakeP />

              <h3 key={Math.random()} id="b2">
                b2
              </h3>
              <FakeP />
              <FakeP />
              <FakeP />

              <h4 key={Math.random()} id="c3">
                c3
              </h4>
              <FakeP />
              <FakeP />
              <FakeP />

              <h4 key={Math.random()} id="c4">
                c4
              </h4>
              <FakeP />
              <FakeP />
              <FakeP />

              <h2 key={Math.random()} id="a2">
                a2
              </h2>

              <h3 key={Math.random()} id="b3">
                b3
              </h3>
              <FakeP />
              <FakeP />
              <FakeP />
              <FakeP />

              <h4 key={Math.random()} id="c5">
                c5
              </h4>
              <FakeP />
              <FakeP />
              <FakeP />

              <h3 key={Math.random()} id="b4">
                b4
              </h3>
              <FakeP />

              <h5 key={Math.random()} id="e1">
                e1
              </h5>

              <h2 key={Math.random()} id="a3">
                a3
              </h2>

              <h3 key={Math.random()} id="b5">
                b5
              </h3>
              <FakeP />
              <FakeP />
              <FakeP />
              <FakeP />

              <h3 key={Math.random()} id="b6">
                b6
              </h3>
              <FakeP />
              <FakeP />
              <FakeP />
              <FakeP />
              <FakeP />
              <FakeP />

              <h4 key={Math.random()} id="c6">
                c6
              </h4>
              <FakeP />
              <FakeP />
              <FakeP />
              <FakeP />

              <h3 key={Math.random()} id="b7">
                b7
              </h3>
              <FakeP />
            </div>
          </Canbetoc>
        </main>
      </div>
    </>
  )
}
