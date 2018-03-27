import React from 'react';
import { PropTypes } from 'prop-types';
import { H3, Table, Button } from 'xp-components-react';
import './style.scss';

const columns = [
  {
    key: 0,
    title: 'Código',
    dataIndex: 'code',
  },
  {
    key: 1,
    title: 'Nome',
    dataIndex: 'name',
  },
  {
    key: 2,
    title: 'Gestor',
    dataIndex: 'fundManager',
  },
];

const InvestmentFundList = ({
  loading, investmentFunds, onUpdate, error,
}) => (
  <div>
    <H3>Fundos de investimento</H3>
    <div>
      <p>Os dados serão obtidos pelo endpoint&nbsp;
        <a
          target="blank"
          href="http://investmentfunds-assets-api-dsv.xpi.com.br:5171/investment-funds/summary"
        >http://investmentfunds-assets-api-dsv.xpi.com.br:5171/investment-funds/summary
        </a>
      </p>

    </div>
    <div className="actions">
      <Button disabled={loading} onClick={onUpdate}>{loading ? 'Carregando...' : 'Atualizar'}</Button>
    </div>
    <div>
      {!loading && !error && !investmentFunds.length && <p>Nenhum fundo encontrado.</p>}
      {!loading && !!investmentFunds.length && <Table rowKey="id" dataSource={investmentFunds} columns={columns} /> }
      {!loading && error &&
      <div>
        <strong>Falha ao carregar fundos</strong>
        <p>Verifique se sua rede possui acesso ao endpoint e que seu navegador
          possui algum plugin ativo para &quot;burlar&quot; o CORS.
        </p>
        <ul>
          <li>
            <a target="blank" href="https://chrome.google.com/webstore/detail/allow-control-allow-origi/nlfbmbojpeacfghkpbjhddihlkkiljbi">
              Addon Chrome
            </a>
          </li>
          <li>
            <a target="blank" href="https://addons.mozilla.org/pt-BR/firefox/addon/cors-everywhere/">
                Addon Firefox
            </a>
          </li>
        </ul>
      </div>
    }
    </div>
  </div>
);

InvestmentFundList.defaultProps = {
  loading: false,
  error: false,
  investmentFunds: [],
};

InvestmentFundList.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.bool,
  investmentFunds: PropTypes.arrayOf(PropTypes.object),
  onUpdate: PropTypes.func.isRequired,
};

export default InvestmentFundList;
