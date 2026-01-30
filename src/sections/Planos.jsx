import style from './modules/Planos.module.css'
import CardPlano from "./components/CardPlano";

function Planos(){
    return (
        <div className={style.contain}>
            <div className={style.content}>
                <h3>CHOOSE THE PLAN THAT FITS YOUR JOURNEY!</h3>
                <div className={style.planos}>
                    <CardPlano
                        titulo="Basic"
                        descricao="Ideal para iniciantes"
                        preco="$187,90"
                        beneficios={[
                            "Treino personalizado",
                            "Avaliação física online",
                            "Plano alimentar personalizado",
                            "1 consulta com nutricionista no mês",
                            "2 sessoes de terapia com psicólogo no mês",
                            "Suporte pelo app"
                        ]}
                    />

                    <CardPlano
                        titulo="Semestral"
                        descricao="Foco total em transformação corporal e mental"
                        preco="$687,70"
                        beneficios={[
                            "Treino personalizado",
                            "Ajuste mensal de treinos e acompanhamento diário on-line com personal trainer",
                            "Estratégia nutricional estruturada com 5 consultas on-line durante o plano e alterações necessárias no plano alimentar",
                            "Acompanhamento psicológico contínuo com 11 seções de terapia",
                            "Ajustes semanais",
                            "Evolução registrada no app"
                        ]}
                    />

                    <CardPlano
                        titulo="Trimestral"
                        descricao="Ideal para começar"
                        preco="$393,50"
                        beneficios={[
                            "Treino e plano alimentar personalizado",
                            "Avaliação física online",
                            "Atualização de treino mensalmente",
                            "2 consulta com nutricionista ao mês e plano alimentar personalizado",
                            "Acompanhamento contínuo por 3 meses",
                            "4 seções de terapia com psicólogo",
                        ]}
                    />
                </div>
            </div>
        </div>
    )
}

export default Planos;
