import style from '../modules/Planos.module.css'
import ItemBeneficio from "./ItemBeneficio";



function CardPlano({ titulo, descricao, preco, precocheio, beneficios, observacao, destaque }) {
    return (
        <div className={`${style.cardplano} ${destaque ? style.destaque : ""}`}>
            <h4>{titulo}</h4>
            <p className={style.desc}>{descricao}</p>
            <p className={style.pricetwo}>{precocheio}</p>
            <div className={style.desconto}>
                <p className={style.price}>{preco}</p>
                <p className={style.percent}>-20%</p>
            </div>

            {observacao && <p className={style.obs}>{observacao}</p>}

            <div className={style.linha}></div>

            <div className={style.itens}>
                {beneficios.map((item, index) => (
                    <ItemBeneficio key={index} item={item} />
                ))}
            </div>

            <div className={style.buttonget}>
                <p>Get started</p>
            </div>
        </div>
    );
}

export default CardPlano;
