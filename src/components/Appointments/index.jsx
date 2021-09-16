import { useState } from 'react'
import Carousel from 'react-elastic-carousel'
import { CancelScheduling } from '../CancelScheduling'
import { Modal } from '../Modal/Modal'
import { Container } from './styles'

export function Appointments({ formatDay, userScheduling, showModal, setShowModal, handleModal }) {
  // const [mouseEnter, setMouseEnter] = useState(false)

  // function handleMouseEnterEvent() {
  //   setMouseEnter(true)
  // }

  // function handleMouseLeaveEvent() {
  //   setMouseEnter(false)
  // }

  function dataToCalendar(day) {
    var data = day,
      dia = (data.getDate() + 1).toString().padStart(2, '0'),
      mes = (data.getMonth() + 1).toString().padStart(2, '0')
    return dia + '/' + mes
  }

  return (
    <Container>
      <h4>Hoje é dia {formatDay}</h4>
      <h5>Meus agendamentos</h5>
      {/* <div onMouseOut={handleMouseLeaveEvent} className='appointments'> */}
      <div className='appointments' onClick={handleModal}>
        {/* <Carousel verticalMode itemsToShow={3}> */}
        {userScheduling?.map((scheduling, index) => (
          <div
            // className={`appointment-date ${mouseEnter === true ? 'show' : ''}`}
            className="appointment-date"
            key={index}
          // onClick={handleMouseEnterEvent}
          // onClick={handleModal}
          >
            {/* {showModal && handleModal === true ? (
              <Modal showModal={showModal} setShowModal={setShowModal} handleModal={handleModal}>
                <CancelScheduling
                  showModal={showModal}
                  setShowModal={setShowModal}
                  handleModal={handleModal}
                />
              </Modal>
            ) : null} */}
            {dataToCalendar(new Date(scheduling.date))}
            <strong>{scheduling.office}</strong>
            <strong>{scheduling.workstation}</strong>
          </div>
        ))}
        {/* </Carousel> */}
      </div>
    </Container>
  )
}
