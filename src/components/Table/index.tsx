import { useEffect } from 'react'

import api from '../../services/api'
import * as Styled from './styles'

// type TableProps = {}

const Table = () => {

  useEffect(() => {
    api.get('/transactions').then((response) => console.log(response.data))
  }, [])

  return (
    <Styled.Container>
      <Styled.Table>
        <thead>
          <tr>
            <Styled.TableHead>Título</Styled.TableHead>
            <Styled.TableHead>Valor</Styled.TableHead>
            <Styled.TableHead>Categoria</Styled.TableHead>
            <Styled.TableHead>Data</Styled.TableHead>
          </tr>
        </thead>

        <tbody>
          <Styled.TableRow>
            <Styled.TableData>Desenvolvimento de website</Styled.TableData>
            <Styled.TableData className='deposit'>
              R$ 12.000,00
            </Styled.TableData>
            <Styled.TableData>Desenvolvimento</Styled.TableData>
            <Styled.TableData>29/04/2021</Styled.TableData>
          </Styled.TableRow>

          <Styled.TableRow>
            <Styled.TableData>Aluguel</Styled.TableData>
            <Styled.TableData className='withdraw'>
              - R$ 1.000,00
            </Styled.TableData>
            <Styled.TableData>Contas</Styled.TableData>
            <Styled.TableData>10/04/2021</Styled.TableData>
          </Styled.TableRow>
        </tbody>
      </Styled.Table>
    </Styled.Container>
  )
}

export default Table
