import Table from '../../assets/Table.svg'
import { Container, Station } from './styles'

export function WorkStation() {
  return (
    <Container>
      <div className='content'>
        <Station>
          <div className='chairs'>
            <div className='circle up'></div>
            <div className='circle up'></div>
            <div className='circle up'></div>
            <div className='circle up'></div>
          </div>
          <img src={Table} alt='Mesa de trabalho' />
          <div className='chairs'>
            <div className='circle down'></div>
            <div className='circle down'></div>
            <div className='circle down'></div>
            <div className='circle down'></div>
          </div>
        </Station>
        <Station>
          <div className='chairs'>
            <div className='circle up'></div>
            <div className='circle up'></div>
            <div className='circle up'></div>
            <div className='circle up'></div>
          </div>
          <img src={Table} alt='Mesa de trabalho' />
          <div className='chairs'>
            <div className='circle down'></div>
            <div className='circle down'></div>
            <div className='circle down'></div>
            <div className='circle down'></div>
          </div>
        </Station>
      </div>
      <div className='content'>
        <Station>
          <div className='chairs'>
            <div className='circle up'></div>
            <div className='circle up'></div>
            <div className='circle up'></div>
            <div className='circle up'></div>
          </div>
          <img src={Table} alt='Mesa de trabalho' />
          <div className='chairs'>
            <div className='circle down'></div>
            <div className='circle down'></div>
            <div className='circle down'></div>
            <div className='circle down'></div>
          </div>
        </Station>
        <Station>
          <div className='chairs'>
            <div className='circle up'></div>
            <div className='circle up'></div>
            <div className='circle up'></div>
            <div className='circle up'></div>
          </div>
          <img src={Table} alt='Mesa de trabalho' />
          <div className='chairs'>
            <div className='circle down'></div>
            <div className='circle down'></div>
            <div className='circle down'></div>
            <div className='circle down'></div>
          </div>
        </Station>
      </div>
    </Container>
  )
}
