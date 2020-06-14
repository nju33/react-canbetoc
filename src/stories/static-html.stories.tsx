import faker from 'faker'
import React from 'react'
import { Canbetoc, StructCanbetoocEventContext } from '..'

export default { title: 'Canbetoc' }

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

export const StatkcHtml = (): React.ReactElement => {
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
            id="b"
            selectors={['h2', 'h3', 'h4', 'h5']}
            handleElementEntersOntoVisible={(
              context: StructCanbetoocEventContext
            ) => {
              const anchors = context.visiblingEmitters.map(
                (emitter) => emitter.tocAnchorElement
              )
              context.tocAnchorElements.forEach((anchor) => {
                if (anchors.includes(anchor)) {
                  anchor.classList.add('text-orange-500')
                } else {
                  anchor.classList.remove('text-orange-500')
                }
              })
            }}>
            <div
              dangerouslySetInnerHTML={{
                __html: `
<h2 id="l-a1">l-a1</h2>>
${faker.lorem.sentences() /* eslint-disable-line */}

<h3 id="l-b1">l-b1</h3>
${faker.lorem.sentences() /* eslint-disable-line */}
${faker.lorem.sentences() /* eslint-disable-line */}
${faker.lorem.sentences() /* eslint-disable-line */}

<h3 id="l-b2">l-b2</h3>
${faker.lorem.sentences() /* eslint-disable-line */}
${faker.lorem.sentences() /* eslint-disable-line */}
${faker.lorem.sentences() /* eslint-disable-line */}

<h4 id="l-c1">l-c1</h4>
${faker.lorem.sentences() /* eslint-disable-line */}
${faker.lorem.sentences() /* eslint-disable-line */}
${faker.lorem.sentences() /* eslint-disable-line */}
<h4 id="l-c2">l-c2</h4>
${faker.lorem.sentences() /* eslint-disable-line */}
${faker.lorem.sentences() /* eslint-disable-line */}
${faker.lorem.sentences() /* eslint-disable-line */}

<h2 id="l-a2">l-a2</h2>
<h3 id="l-b3">l-b3</h3>
${faker.lorem.sentences() /* eslint-disable-line */}
${faker.lorem.sentences() /* eslint-disable-line */}
${faker.lorem.sentences() /* eslint-disable-line */}
${faker.lorem.sentences() /* eslint-disable-line */}

<h4 id="l-c3">l-c3</h4>
${faker.lorem.sentences() /* eslint-disable-line */}
${faker.lorem.sentences() /* eslint-disable-line */}
${faker.lorem.sentences() /* eslint-disable-line */}

<h3 id="l-b4">l-b4</h3>
${faker.lorem.sentences() /* eslint-disable-line */}

<h5 id="l-e1">l-e1</h5>>
${faker.lorem.sentences() /* eslint-disable-line */}
            `
              }}
            />
          </Canbetoc>
        </div>
      </div>
    </div>
  )
}
