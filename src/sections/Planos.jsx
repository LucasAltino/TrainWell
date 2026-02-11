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
                        descricao="Ideal for beginners"
                        precocheio="$287,90"
                        preco="$187,90"
                        beneficios={[
                            "Personalized training",
                            "Online physical assessment",
                            "Personalized meal plan",
                            "1 consultation with a nutritionist per month",
                            "2 therapy sessions with a psychologist per month",
                            "App support"
                        ]}
                    />

                    <CardPlano
                        titulo="Semiannual"
                        descricao="Total focus on body and mental transformation"
                        precocheio="$287,90"
                        preco="$687,70"
                        beneficios={[
                            "Personalized training",
                            "Monthly workout adjustments and daily online follow-up with a personal trainer",
                            "Structured nutritional strategy with 5 online consultations during the plan and necessary adjustments to the meal plan",
                            "Continuous psychological support with 11 therapy sessions",
                            "Weekly adjustments",
                            "Progress tracked in the app"
                        ]}
                    />

                    <CardPlano
                        titulo="Quarterly"
                        descricao="Ideal to get started"
                        precocheio="$287,90"
                        preco="$393,50"
                        beneficios={[
                            "Personalized workout and meal plan",
                            "Online physical assessment",
                            "Monthly workout updates",
                            "2 consultations with a nutritionist per month and personalized meal plan",
                            "Continuous support for 3 months",
                            "4 therapy sessions with a psychologist",
                        ]}
                    />
                </div>
            </div>
        </div>
    )
}

export default Planos;
