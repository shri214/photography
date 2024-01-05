import React from 'react'

export const ProcessTree = ({processData, ind}) => {
  return (
    <div className="processTree" key={ind}>
          <div className="experience-container steps1 br">
            <div className="outer-container flexEnd">
              <div className="container">
                <div className="indicator right"></div>
                <div className="experience-desc ">
                  <h2>{processData.step0}</h2>
                  <p className="desc-heading">{processData.tag0}</p>
                  <p>
                    {processData.desc0}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="experience-container steps2">
            <div className="outer-container">
              <div className="container">
                <div className="indicator left"></div>
                <div className="experience-desc textStart">
                  <h2>{processData.step1}</h2>
                  <p className="desc-heading">{processData.tag1}</p>
                  <p>
                    {processData.desc1}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
  )
}

