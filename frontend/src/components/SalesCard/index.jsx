import NotificationButton from '../NotificationButton';
import './styles.css';

function SalesCard() {

    return (
      
        <div className="dsmeta-card">
				<h2 className="dsmeta-sales-title">Vendas</h2>
				<div>
					<div className="dsmeta-form-control-container">
						<input className="dsmeta-form-control" type="text" placeholder="" />
					</div>
					<div className="dsmeta-form-control-container">
						<input class="dsmeta-form-control" type="text" placeholder="" />
					</div>
				</div>
				<div>
					<table className="dsmeta-sales-table">
						<thead>
							<tr>
								<th className="show992">ID</th>
								<th className="show576">Data</th>
								<th>Vendedor</th>
								<th className="show992">Visitas</th>
								<th className="show992">Vendas</th>
								<th>Total</th>
								<th>Notificar</th>								
							</tr>
						</thead>
						<tbody>
							<tr>
								<td className="show992">#341</td>
								<td className="show576">09/07/2022</td>
								<td>Anakin</td>
								<td className="show992">15</td>
								<td className="show992">11</td>
								<td>R$ 1530.00</td>
								<td>
									<div className="dsmeta-red-btn-container">
										<NotificationButton />                                      
									</div>
								</td>
							</tr>
							<tr>
								<td className="show992">#342</td>
								<td className="show576">09/07/2022</td>
								<td>Daniel</td>
								<td className="show992">10</td>
								<td className="show992">9</td>
								<td>R$ 95300.00</td>
								<td>
									<div className="dsmeta-red-btn-container">
                                        <NotificationButton />
									</div>
								</td>
							</tr>
							<tr>
								<td className="show992">#343</td>
								<td className="show576">09/07/2022</td>
								<td>Priscila</td>
								<td className="show992">6</td>
								<td className="show992">4</td>
								<td>R$ 5530.00</td>
								<td>
									<div className="dsmeta-red-btn-container">
                                        <NotificationButton />
									</div>
								</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>  
    )
  }
  
  export default SalesCard;