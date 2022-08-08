import axios from 'axios';
import icon from '../../assets/img/notification-ico.svg';
import { BASE_URL } from '../../utils/request';

import './styles.css';

type Props = {
    saleId: number;
}


/*  Function */
function handleClick(id :number){
    axios(`${BASE_URL}/sales/${id}/notification`)
        .then(response => {
            console.log("Success");
        });
}

function NotificationButton( {saleId} : Props) {

    return (
        <div className="dsmeta-red-btn" onClick={() => handleClick(saleId) }>
            <img src={icon} alt="Notificar" />
        </div>
    )
  }
  
  export default NotificationButton;