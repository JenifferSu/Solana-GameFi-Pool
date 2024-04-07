const { createApp, reactive, ref } = Vue;

const app = createApp({
    setup() {
        const characters = [
            { name: 'CNY', image: './img/rabbit.mp4',level:'R' },
            { name: 'HALOWEEN', image: './img/pumkin.mp4',level:'S' },
            // { name: 'CINMING', image: './img/cinmingSS.svg',level:'SS' },
            // { name: 'CHRISTMAS', image: './img/christmasS.svg',level:'S' },
            { name: 'CINMING', image: './img/lingering.mp4',level:'SS' },
            // { name: 'AUTUMN', image: './img/autumnS.svg',level:'S' },
            { name: 'TECHNOLOFY', image: './img/tech.mp4',level:'SS' }
            // Add more characters
        ];

        const result = reactive({
            name: '',
            image: '',
            level: '',
        });

        const showAnimation = ref(false);
        const showAnimation2 = ref(false);
        const showCoin = ref(true);
        const count = ref(3);
        const displayheart = ref('❤️❤️❤️');
        function roll() {
            if(result!=null){
                result.name = "";
                result.image = "";
                result.level = "";
            }

            const randomIndex = Math.floor(Math.random() * characters.length);
            result.name = characters[randomIndex].name;
            result.image = characters[randomIndex].image;

            showAnimation.value = true;
            showCoin.value = false;

            // setTimeout(() => {
            //     const randomIndex = Math.floor(Math.random() * characters.length);
            //     result.name = characters[randomIndex].name;
            //     result.image = characters[randomIndex].image;
            //     result.level = characters[randomIndex].level;
            //     console.log("Random result:", randomIndex, result.name, result.image);
            //     backgroundImage = levelImages[result.level];
            // }, 12000)
        }

        function hideAnimation() {
            console.log("in...");


            showAnimation.value = false;
            showAnimation2.value = true;

            console.log("end...");
        }

        
        function hideAnimation2() {
            showAnimation2.value = false;
            showCoin.value = true;
            console.log("Random result: success");
            count.value --;
            displayheart.value = '❤️'.repeat(count.value);
            console.log(count.value);
        }


        return {
            roll,
            result,
            showAnimation,
            hideAnimation,
            showAnimation2,
            hideAnimation2,
            showCoin,
            displayheart
        };
    }
});

app.mount('#app');
