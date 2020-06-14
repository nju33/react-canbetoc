import faker from 'faker'
import React from 'react'
import { Canbetoc, StructCanbetoocEventContext } from '..'

export default { title: 'Canbetoc' }

const FakeP: React.FC = () => {
  return <p>{faker.lorem.sentences()}</p>
}

const useStyle = (): void => {
  React.useEffect(() => {
    const style = document.createElement('style')
    style.innerHTML = `
  body {
    line-height: 3;
  }
  .canbetoc-toc_list {
    margin-left: 2em
  }
      `

    document.head.appendChild(style)

    return () => {
      document.head.removeChild(style)
    }
  }, [])
}

export const Default = (): React.ReactElement => {
  const [num, setNum] = React.useState(0)
  useStyle()

  return (
    <div className="flex relative self-start">
      <div className="flex-none w-2/6 sticky top-0 h-0">
        <button onClick={() => setNum(num + 1)}>{num}</button>
        <div data-canbetoc-id="a" />
        <div data-canbetoc-id="b" />
      </div>
      <div>
        <div className="flex-auto w-full">
          <Canbetoc
            id="a"
            selectors={['h2', 'h3', 'h4', 'h5']}
            handleElementEntersOntoVisible={(
              context: StructCanbetoocEventContext
            ) => {
              context.tocAnchorElements.forEach((anchor) => {
                if (
                  anchor === context.firstVisiblingEmitters.tocAnchorElement
                ) {
                  anchor.classList.add('text-orange-500')
                } else {
                  anchor.classList.remove('text-orange-500')
                }
              })
            }}>
            <div>
              <h2 key={Math.random()} id="a1">
                a1a
              </h2>
              <FakeP />

              <h3 key={Math.random()} id="b1">
                b1
              </h3>
              <FakeP />
              <FakeP />
              <FakeP />

              <h3 key={Math.random()} id="b2">
                b2
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

              <h4 key={Math.random()} id="c3">
                c3
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
              <FakeP />
            </div>
          </Canbetoc>
        </div>
      </div>
    </div>
  )
}
