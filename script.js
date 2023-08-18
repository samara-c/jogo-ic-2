
class Game {
    constructor() {
        var config = {
            type: Phaser.AUTO,
            width: 1120,
            height: 680,
            physics: {
                default: 'arcade',
                arcade: {
                    gravity: { y: 0 }
                }
            },
            scene: [Level]
        };

        this.game = new Phaser.Game(config);
    }
}

class Level extends Phaser.Scene {
    constructor() {
        super({ key: 'level' });
    }

    preload() {
        // Pré-carregar recursos json
        this.load.json('telas', 'telas.json');

        //Pré-carregar fontes de texto
        //this.load.font('acherus_grotesque', 'font/acherus_grotesque_1.otf');

        // Pré-carregar fundos de tela
        this.load.image('bedroom_day', 'img/bgs/bedroom_day.png');
        this.load.image('bedroom_night', 'img/bgs/bedroom_night.png');
        this.load.image('table', 'img/bgs/table.png');
        this.load.image('school', 'img/bgs/school.png');
        this.load.image('fundo_jogo_memoria', 'img/bgs/fundo_jogo_memoria.png');


        // imagens laptop
        this.load.image('laptop', 'img/bgs/laptop.png');
        this.load.image('laptop_jogo_1', 'img/bgs/laptop_jogo_1.png');
        this.load.image('laptop_fundo', 'img/bgs/laptop_fundo.png');


        // pré-carregar imagens de personagens

        // Carregar imagens dos personagens Julia
        this.load.image('julia_angry_e', 'img/characters/julia_angry_e.png');
        this.load.image('julia_happy_e', 'img/characters/julia_happy_e.png');
        this.load.image('julia_sad_e', 'img/characters/julia_sad_e.png');
        this.load.image('julia_angry_d', 'img/characters/julia_angry_d.png');
        this.load.image('julia_happy_d', 'img/characters/julia_happy_d.png');
        this.load.image('julia_sad_d', 'img/characters/julia_sad_d.png');

        // Carregar imagens dos personagens Pedro
        this.load.image('pedro_angry_e', 'img/characters/pedro_angry_e.png');
        this.load.image('pedro_happy_e', 'img/characters/pedro_happy_e.png');
        this.load.image('pedro_sad_e', 'img/characters/pedro_sad_e.png');
        this.load.image('pedro_angry_d', 'img/characters/pedro_angry_d.png');
        this.load.image('pedro_happy_d', 'img/characters/pedro_happy_d.png');
        this.load.image('pedro_sad_d', 'img/characters/pedro_sad_d.png');

        // Carregar imagens dos personagens Otávio
        this.load.image('otavio_angry_e', 'img/characters/otavio_angry_e.png');
        this.load.image('otavio_happy_e', 'img/characters/otavio_happy_e.png');
        this.load.image('otavio_sad_e', 'img/characters/otavio_sad_e.png');
        this.load.image('otavio_angry_d', 'img/characters/otavio_angry_d.png');
        this.load.image('otavio_happy_d', 'img/characters/otavio_happy_d.png');
        this.load.image('otavio_sad_d', 'img/characters/otavio_sad_d.png');

        // Pré-carregar icones
        this.load.image('book_icon', 'img/icons/book_icon.png');
        this.load.image('botao_avancar', 'img/icons/arrow.png');
        this.load.image('backpack_icon', 'img/icons/backpack_icon.png');
        this.load.image('clock_icon', 'img/icons/clock_icon.png');

        //Pré carregar mensagens de email
        this.load.image('email_1', 'img/msg/email_1.png');
        this.load.image('email_2', 'img/msg/email_2.png');
        this.load.image('email_3', 'img/msg/email_3.png');
        this.load.image('intro_pdf', 'img/msg/intro_pdf.png');

        // Pré-carregar botoes
        this.load.image('botao_anexo', 'img/buttons/anexo_1.png');
        this.load.image('continuar_btn', 'img/buttons/continuar_btn.png');
        this.load.image('continuar_btn_formatado', 'img/buttons/continuar_btn_2.png');
        this.load.image('verificar_btn', 'img/buttons/verificar_btn.png');

        //Pré-carregar imagens utilizadas nos games

        this.load.image('enunciado_jogo_1', 'img/games_files/enunciado_jogo_1.png');
        this.load.image('enunciado_jogo_2', 'img/games_files/enunciado_jogo_2.png');
        this.load.image('enunciado_jogo_3', 'img/games_files/enunciado_verdadeiro_falso.png');
        this.load.image('enunciado_jogo_4', 'img/games_files/enunciado_verdadeiro_1.png');
        this.load.image('enunciado_jogo_5', 'img/games_files/enunciado_verdadeiro_2.png');
        this.load.image('enunciado_jogo_6', 'img/games_files/enunciado_verdadeiro_3.png');
        this.load.image('box', 'https://labs.phaser.io/assets/sprites/block.png');
        this.load.image('resposta_correta', 'img/games_files/resposta_correta.png');
        this.load.image('resposta_errada', 'img/games_files/resposta_errada.png');
        this.load.image('jogo_relogio_1', 'img/games_files/jogo_relogio_1.png');
        this.load.image('jogo_relogio_2', 'img/games_files/jogo_relogio_2.png');
        this.load.image('jogo_relogio_3', 'img/games_files/jogo_relogio_3.png');
        this.load.image('jogo_relogio_4', 'img/games_files/jogo_relogio_4.png');
        this.load.image('jogo_relogio_5', 'img/games_files/jogo_relogio_5.png');

        //Jogo da memoria
        this.load.image('card_back', 'img/games_files/card_back.png');
        this.load.image('card_1', 'img/games_files/card_rato.png');
        this.load.image('card_2', 'img/games_files/card_cobra.png');
        this.load.image('card_3', 'img/games_files/card_pato.png');
        this.load.image('jogo_vitoria', 'img/games_files/jogo_vitoria.png');
        this.load.image('jogo_derrota', 'img/games_files/jogo_derrota.png');



        //Pré-carregar videos
        this.load.video('transicao_1', 'video/transicao_1.mp4');
        this.load.video('transicao_2', 'video/transicao_2.mp4');
        this.load.video('transicao_3', 'video/transicao_3.mp4');
        this.load.video('transicao_4', 'video/transicao_4.mp4'); //semana 2
        this.load.video('livro_otavio', 'video/livro_otavio.mp4');
        this.load.video('lousa_otavio', 'video/lousa_otavio.mp4');
        this.load.video('jogo_requisitos_funcionais', 'video/jogo_requisitos_funcionais.mp4');
        this.load.video('requisitos_corrigidos', 'video/requisitos_corrigidos.mp4');
        this.load.video('transicao_faculdade', 'video/transicao_faculdade.mp4');
        this.load.video('cena_final', 'video/cena_final.mp4');



    }

    create() {
        const telas = this.cache.json.get('telas');

        let hud_tam = 0;

        // Variável para rastrear a tela atual
        let telaAtual = 0;
        let personagem;
        let botaoAvancar;
        let semana = 0;

        //Atributos psicologicos personagem
        let entusiasmo = 0;
        let conhecimento = 0;
        let relacionamento = 0;

        let fila_acoes = [];
        let continuar_animacao = false;
        let desafio_pergunta = 1;
        let desafio_requisitos_valor = 1;
        let pontos_pergunta = 0;
        let pontos_teste_estatico = 0;

        let relogio_ativo = false;
        let tempo_relogio = 180;

        var timer;
        var elapsedTime = 0;
        var maxTime = 180;
        var timerText;

        let semana_1 = 1;
        let pontos_totais = 0;

        // Variavel para definir tamanho da caixa de texto de dialogo
        const tam_x_caixa_texto_personagens = 900;
        const tam_y_caixa_texto_personagens = 180;

        // Variável para definir posição da caixa de texto de dialogo
        const pos_x_caixa_texto_personagens = 110;
        const pos_y_caixa_texto_personagens = 90;

        // Variavel para definir tamanho caixa de texto book
        const tam_x_caixa_texto_book = 900;
        const tam_y_caixa_texto_book = 500;
        let caixaTextoBookFechada = true;
        let caixaTextoBook;
        let pause = false;

        // Variavel para definir posicao da caixa de texto book
        const pos_x_caixa_texto_book = 110;
        const pos_y_caixa_texto_book = 100;

        //Escala do fundo

        var centerX = this.cameras.main.width / 2;
        var centerY = this.cameras.main.height / 1.9;
        var vezes_que_pode_reiniciar_o_jogo = 4;

        // Cursor
        this.input.setDefaultCursor('default');

        // variável que guarda o nome do personagem que está falando
        // Função para construir uma tela

        const iniciarJogo = () => {



            const background = this.add.image(560, 340, 'laptop_fundo');

            var email_1 = this.add.image(centerX, centerY, 'email_1');
            email_1.setScale(0); // Define o tamanho inicial como 0

            this.tweens.add({
                targets: email_1,
                scaleX: 1, // Define o tamanho final em escala horizontal
                scaleY: 1, // Define o tamanho final em escala vertical
                duration: 1000, // Duração da animação em milissegundos (2 segundos neste exemplo)
                ease: 'Linear',
                onComplete: function () {

                    email_1.setInteractive();
                }
            });

            email_1.on('pointerdown', () => {
                // Função para abrir a caixa de texto
                email_1.destroy();
                background.destroy();
                carregarEmailsDeBoasVindas();

            });

            construirHUD();

        }

        const exibirAnimacaoSemana = () => {

            const video = this.add.video(centerX, centerY, 'transicao_1');
            video.setScale(1.2);
            video.play();

            video.on('complete', function () {
                // Chame o seu método aqui
                video.destroy();
                construirTela(16);
            });



        }

        const exibirCenaFinal = () => {

            const video = this.add.video(centerX, centerY, 'cena_final');
            video.setScale(1.2);
            video.play();

        }

        const exibirAnimacaoSemana2 = () => {

            const video = this.add.video(centerX, centerY, 'transicao_4');
            video.setScale(1.2);
            video.play();

            video.on('complete', function () {
                // Chame o seu método aqui
                video.destroy();
                construirTela(63);
            });



        }

        const exibirDocumentacaoCorrigida = () => {

            var btn_continuar;

            const video = this.add.video(centerX, centerY - 15, 'requisitos_corrigidos');
            video.play();

            btn_continuar = this.add.image(centerX + 300, centerY + 270, 'continuar_btn_formatado');
            btn_continuar.setScale(0.9);

            btn_continuar.setVisible(false);

            video.on('complete', function () {
                btn_continuar.setVisible(true);
                btn_continuar.setInteractive();
            });

            btn_continuar.on('pointerover', () => {
                btn_continuar.setScale(1);
                this.input.setDefaultCursor('pointer');
            });

            btn_continuar.on('pointerout', () => {
                btn_continuar.setScale(0.9);
                this.input.setDefaultCursor('default');
            });

            btn_continuar.on('pointerdown', () => {

                video.destroy();
                btn_continuar.destroy();
                this.input.setDefaultCursor('default');
                construirTela(68);

            });



            construirHUD();



        }

        const exibirLousaRequisitosFuncionais = () => {

            var btn_continuar;

            const video = this.add.video(centerX, centerY - 15, 'lousa_otavio');
            video.play();

            btn_continuar = this.add.image(centerX, centerY + 270, 'continuar_btn_formatado');
            btn_continuar.setScale(0.9);

            btn_continuar.setVisible(false);

            video.on('complete', function () {
                btn_continuar.setVisible(true);
                btn_continuar.setInteractive();
            });

            btn_continuar.on('pointerover', () => {
                btn_continuar.setScale(1);
                this.input.setDefaultCursor('pointer');
            });

            btn_continuar.on('pointerout', () => {
                btn_continuar.setScale(0.9);
                this.input.setDefaultCursor('default');
            });

            btn_continuar.on('pointerdown', () => {

                video.destroy();
                btn_continuar.destroy();
                this.input.setDefaultCursor('default');
                construirTela(51);

            });



            construirHUD();



        }

        const exibirAnimacaoDia = () => {

            const video = this.add.video(centerX, centerY, 'transicao_3');
            video.setScale(1.2);
            video.play();

            video.on('complete', function () {
                // Chame o seu método aqui
                video.destroy();

                if (semana_1 === 1) {
                    semana_1 += 1;
                    construirTela(42);

                } else if (pontos_totais >= 5) {

                    construirTela(80);


                } else {

                    construirTela(81);
                }
            });




        }

        const exibirAnimacaoDormitório = () => {

            const video = this.add.video(centerX, centerY, 'transicao_2');
            video.setScale(1.2);
            video.play();

            video.on('complete', function () {
                // Chame o seu método aqui
                video.destroy();
                construirTela(32);
            });




        }

        const exibirAnimacaoFaculdade = () => {

            const video = this.add.video(centerX, centerY, 'transicao_faculdade');
            video.setScale(1.2);
            video.play();

            video.on('complete', function () {
                // Chame o seu método aqui
                video.destroy();
                construirTela(71);
            });

        }

        const abrirLivroOtavio = () => {

            var btn_continuar;
            var video_completo = false;

            const video = this.add.video(centerX, centerY - 15, 'livro_otavio');
            video.play();

            btn_continuar = this.add.image(centerX, centerY + 270, 'continuar_btn_formatado');
            btn_continuar.setScale(0.9);

            btn_continuar.setVisible(false);

            video.on('complete', function () {
                btn_continuar.setVisible(true);
                btn_continuar.setInteractive();
            });

            btn_continuar.on('pointerover', () => {
                btn_continuar.setScale(1);
                this.input.setDefaultCursor('pointer');
            });

            btn_continuar.on('pointerout', () => {
                btn_continuar.setScale(0.9);
                this.input.setDefaultCursor('default');
            });

            btn_continuar.on('pointerdown', () => {

                video.destroy();
                btn_continuar.destroy();
                this.input.setDefaultCursor('default');
                construirTela(37);




            });



            construirHUD();


        }

        const carregarEmailsDeBoasVindas = () => {

            var centerX = this.cameras.main.width / 2;
            var centerY = this.cameras.main.height / 2;
            const background = this.add.image(560, 340, 'laptop_fundo');

            var email_2 = this.add.image(centerX, centerY, 'email_2');
            email_2.alpha = 0;

            this.tweens.add({
                targets: email_2,
                alpha: 1, // Define a transparência final como 1 (totalmente visível)
                duration: 2000, // Duração da animação em milissegundos (2 segundos neste exemplo)
                ease: 'Linear',
                onComplete: function () {
                    email_2.setInteractive();
                }
            });

            email_2.on('pointerdown', () => {
                // Função para abrir a caixa de texto
                email_2.destroy();
                background.destroy();
                carregarEmailAnexo();

            });


            construirHUD();


        }

        const carregarEmailAnexo = () => {

            var centerX = this.cameras.main.width / 2;
            var centerY = this.cameras.main.height / 2;
            var botao_anexo;
            const background = this.add.image(560, 340, 'laptop_fundo');
            var botao_visivel = false;

            var email_3 = this.add.image(centerX, centerY, 'email_3');
            email_3.alpha = 0;

            botao_anexo = this.add.image(400, 360, 'botao_anexo').setScale(0.6);
            botao_anexo.alpha = 0;

            this.tweens.add({
                targets: email_3,
                alpha: 1, // Define a transparência final como 1 (totalmente visível)
                duration: 2000, // Duração da animação em milissegundos (2 segundos neste exemplo)
                ease: 'Linear',

                onComplete: function () {

                    botao_anexo.alpha = 1;
                    botao_anexo.setInteractive();

                }
            });

            botao_anexo.on('pointerdown', () => {
                // Função para abrir a caixa de texto
                botao_anexo.destroy();
                background.destroy();
                email_3.destroy();
                apresentarEmpresa();

            });

            construirHUD();


        }


        const apresentarEmpresa = () => {

            var centerX = this.cameras.main.width / 2;
            var centerY = this.cameras.main.height / 2;
            const background = this.add.image(560, 340, 'laptop_fundo');
            var continuar_btn;

            var intro_pdf = this.add.image(centerX, centerY, 'intro_pdf');
            intro_pdf.alpha = 0;

            continuar_btn = this.add.image(centerX, centerY + 340, 'continuar_btn').setScale(0.8);
            continuar_btn.alpha = 0;

            this.tweens.add({
                targets: intro_pdf,
                alpha: 1, // Define a transparência final como 1 (totalmente visível)
                duration: 2000, // Duração da animação em milissegundos (2 segundos neste exemplo)
                ease: 'Linear',
                onComplete: function () {

                    continuar_btn.alpha = 1;
                    continuar_btn.setInteractive();

                }
            });

            continuar_btn.on('pointerdown', () => {
                // Função para abrir a caixa de texto
                continuar_btn.destroy();
                intro_pdf.destroy();
                background.destroy();
                construirTela(0);

            });

            construirHUD();

        }

        const construirTela = (id_tela) => {

            fila_acoes.push(id_tela);
            console.log(fila_acoes);
            var prox_tela;
            telaAtual = id_tela;
            const tela = telas[id_tela];
            var opcao_1;
            var opcao_2;
            var continuar;
            var botaoContinuarVisivel = false;
            const largura_texto = 600;
            const altura_texto = 300;
            var resultado = ' ';
            var personagem_secundario;


            const personagemNome = tela.personagem;
            const personagemNomeFormatado = personagemNome.charAt(0).toUpperCase() + personagemNome.slice(1);
            const texto_completo = tela.texto;
            const fundo = tela.fundo;

            if (tela.id === 52) {

                relogio_ativo = true;

            }

            if (tela.id === 56) {

            }


            let escalaFundo = 0.7;
            if (fundo === 'table') {
                escalaFundo = 1.8; // Ajuste o valor da escala para o fundo 'table'
            }

            const background = this.add.image(450, 300, fundo);
            background.setScale(escalaFundo);


            // Exibir texto
            const textBox = this.add.graphics();
            textBox.fillStyle(0xFFFFFF, 0.95); //seta a tranparencia da caixa de texto aqui
            textBox.lineStyle(6, 0x000000, 1); // Borda preta
            textBox.fillRoundedRect(pos_x_caixa_texto_personagens, pos_y_caixa_texto_personagens, tam_x_caixa_texto_personagens, tam_y_caixa_texto_personagens, 10);
            //textBox.setAlpha(1.0);



            const textBoxBorder = this.add.graphics();
            textBoxBorder.lineStyle(2, 0x603913);
            textBoxBorder.strokeRoundedRect(pos_x_caixa_texto_personagens, pos_y_caixa_texto_personagens, tam_x_caixa_texto_personagens, tam_y_caixa_texto_personagens, 10);

            // Exibir texto

            const texto = this.add.text(pos_x_caixa_texto_personagens + 30, pos_y_caixa_texto_personagens + 30, texto_completo, {
                fontFamily: 'Arial',
                fontSize: '24px',
                color: '#000000' // Cor preta
            });



            const textBoxName = this.add.text(pos_x_caixa_texto_personagens, pos_y_caixa_texto_personagens - tam_y_caixa_texto_personagens / 5, personagemNomeFormatado, {
                fontFamily: 'Arial',
                fontSize: '24px',
                fontWeight: 'bold',
                color: '#000000',
            });

            // Definir estilo da caixa de texto do nome do personagem
            textBoxName.setPadding({ left: 30, right: 30, top: 10, bottom: 10 });
            textBoxName.setFixedSize(tam_x_caixa_texto_personagens / 6, tam_y_caixa_texto_personagens / 6);

            // Criar borda da caixa de texto do nome do personagem
            const textBoxNameBorder = this.add.graphics();
            textBoxNameBorder.lineStyle(2, 0x603913); // Marrom escuro
            textBoxNameBorder.strokeRoundedRect(pos_x_caixa_texto_personagens, pos_y_caixa_texto_personagens - tam_y_caixa_texto_personagens / 6, tam_x_caixa_texto_personagens / 6, tam_y_caixa_texto_personagens / 6, 10);

            personagem = this.add.image(tela.posicao.x, tela.posicao.y, `${tela.personagem}_${tela.emocao}`).setScale(0.7);
            personagem.alpha = 0;


            if (tela.visivel) {

                this.tweens.add({
                    targets: personagem,
                    alpha: 1, // Define a transparência final como 1 (totalmente visível)
                    duration: 1500, // Duração da animação em milissegundos (2 segundos neste exemplo)
                    ease: 'Linear',

                    onComplete: function () {

                        personagem.setInteractive();

                    }
                });

                if (tela.id === 56) {

                    personagem_secundario = this.add.image(900, tela.posicao.y, `pedro_happy_e`).setScale(0.7);
                    personagem_secundario.alpha = 0;

                    this.tweens.add({
                        targets: personagem_secundario,
                        alpha: 1, // Define a transparência final como 1 (totalmente visível)
                        duration: 1500, // Duração da animação em milissegundos (2 segundos neste exemplo)
                        ease: 'Linear',

                        onComplete: function () {

                            personagem_secundario.setInteractive();

                        }
                    });


                }



            } // Habilitar interação com o personagem

            if (tela.dialogoInterativo) {

                const textBox_opcao_1 = this.add.graphics();
                textBox_opcao_1.fillStyle(0xFFFFFF, 0.95); //seta a tranparencia da caixa de texto aqui
                textBox_opcao_1.fillRoundedRect(pos_x_caixa_texto_personagens, pos_y_caixa_texto_personagens + 440, tam_x_caixa_texto_personagens, tam_y_caixa_texto_personagens / 4, 10);
                textBox_opcao_1.setInteractive();
                opcao_1 = this.add.text(pos_x_caixa_texto_personagens + 30, pos_y_caixa_texto_personagens + 450, tela.opcao_1.texto, { fontFamily: 'Arial', fontSize: '24px', fill: '#000' });
                opcao_1.setInteractive();

                const textBoxBorder_opcao_1 = this.add.graphics();
                textBoxBorder_opcao_1.lineStyle(2, 0x603913);
                textBoxBorder_opcao_1.strokeRoundedRect(pos_x_caixa_texto_personagens, pos_y_caixa_texto_personagens + 440, tam_x_caixa_texto_personagens, tam_y_caixa_texto_personagens / 4, 10);

                const textBox_opcao_2 = this.add.graphics();
                textBox_opcao_2.fillStyle(0xFFFFFF, 0.95); //seta a tranparencia da caixa de texto aqui
                textBox_opcao_2.fillRoundedRect(pos_x_caixa_texto_personagens, pos_y_caixa_texto_personagens + 500, tam_x_caixa_texto_personagens, tam_y_caixa_texto_personagens / 4, 10);
                textBox_opcao_2.setInteractive();
                opcao_2 = this.add.text(pos_x_caixa_texto_personagens + 30, pos_y_caixa_texto_personagens + 510, tela.opcao_2.texto, { fontFamily: 'Arial', fontSize: '24px', fill: '#000' });
                opcao_2.setInteractive();

                const textBoxBorder_opcao_2 = this.add.graphics();
                textBoxBorder_opcao_2.lineStyle(2, 0x603913);
                textBoxBorder_opcao_2.strokeRoundedRect(pos_x_caixa_texto_personagens, pos_y_caixa_texto_personagens + 500, tam_x_caixa_texto_personagens, tam_y_caixa_texto_personagens / 4, 10);

                opcao_1.on('pointerover', () => {
                    opcao_1.setScale(1.1);
                    this.input.setDefaultCursor('pointer');
                });

                opcao_1.on('pointerout', () => {
                    opcao_1.setScale(1.0);
                    this.input.setDefaultCursor('default');
                });

                opcao_2.on('pointerover', () => {
                    opcao_2.setScale(1.1);
                    this.input.setDefaultCursor('pointer');
                });

                opcao_2.on('pointerout', () => {
                    opcao_2.setScale(1.0);
                    this.input.setDefaultCursor('default');
                });

                opcao_1.on('pointerdown', function () {

                    if (tela.altera_status) {

                        entusiasmo += tela.opcao_1.entusiasmo;
                        conhecimento += tela.opcao_1.conhecimento;
                        relacionamento += tela.opcao_1.relacionamento;
                    }

                    textBoxBorder_opcao_1.destroy();
                    textBoxBorder_opcao_2.destroy();
                    textBox_opcao_1.destroy();
                    textBox_opcao_2.destroy();
                    opcao_1.destroy();
                    opcao_2.destroy();
                    prox_tela = tela.opcao_1.prox_tela;
                    avancarTela(prox_tela);
                });

                opcao_2.on('pointerdown', function () {

                    if (tela.altera_status) {

                        entusiasmo += tela.opcao_2.entusiasmo;
                        conhecimento += tela.opcao_2.conhecimento;
                        relacionamento += tela.opcao_2.relacionamento;
                    }

                    textBoxBorder_opcao_1.destroy();
                    textBoxBorder_opcao_2.destroy();
                    textBox_opcao_1.destroy();
                    textBox_opcao_2.destroy();
                    opcao_1.destroy();
                    opcao_2.destroy();
                    prox_tela = tela.opcao_2.prox_tela;
                    avancarTela(prox_tela);
                });

            }

            if (!tela.dialogoInterativo) {

                const botao_continuar = this.add.graphics();
                botao_continuar.fillStyle(0xFFFFFF, 0.95); //seta a tranparencia da caixa de texto aqui
                botao_continuar.fillRoundedRect(pos_x_caixa_texto_personagens, pos_y_caixa_texto_personagens + 470, tam_x_caixa_texto_personagens, tam_y_caixa_texto_personagens / 4, 10);
                botao_continuar.setInteractive();
                continuar = this.add.text(pos_x_caixa_texto_personagens + 30, pos_y_caixa_texto_personagens + 480, tela.texto_padrao, { fontFamily: 'Arial', fontSize: '24px', fill: '#000' });
                continuar.setInteractive();

                const textBoxBorder_continuar = this.add.graphics();
                textBoxBorder_continuar.lineStyle(2, 0x603913);
                textBoxBorder_continuar.strokeRoundedRect(pos_x_caixa_texto_personagens, pos_y_caixa_texto_personagens + 470, tam_x_caixa_texto_personagens, tam_y_caixa_texto_personagens / 4, 10);

                continuar.on('pointerover', () => {
                    continuar.setScale(1.1);
                    this.input.setDefaultCursor('pointer');
                });

                continuar.on('pointerout', () => {
                    continuar.setScale(1.0);
                    this.input.setDefaultCursor('default');
                });

                continuar.on('pointerdown', function () {

                    botao_continuar.destroy();
                    continuar.destroy();
                    textBoxBorder_continuar.destroy();
                    prox_tela = tela.prox_tela;
                    avancarTela(prox_tela);
                });

            }



            const avancarTela = (prox_tela) => {


                console.log("RELACIONAMENTO STATUS: " + relacionamento);
                console.log("ENTUSIASMO STATUS: " + entusiasmo);
                console.log("CONHECIMENTO STATUS: " + conhecimento);
                this.input.setDefaultCursor('default');
                personagem.destroy();
                textBox.destroy();
                texto.destroy();
                textBoxName.destroy();
                background.destroy();
                textBoxBorder.destroy();
                textBoxNameBorder.destroy();

                if (tela.id === 56) {
                    personagem_secundario.destroy();
                }

                if (typeof prox_tela === 'number') {
                    console.log("é numero");
                    construirTela(prox_tela);
                }

                else {

                    iniciarAcaoInterativa(prox_tela);

                }

            }


            construirHUD();



        };

        const iniciarAcaoInterativa = (acao) => {

            var acao_a_ser_executada = acao;

            switch (acao_a_ser_executada) {
                case "jogo_adivinhar_funcao_qa":
                    descobrirAtividadesQA();
                    construirHUD();
                    break;
                case "exibir_cena_transicao_1":
                    //construirHUD();
                    semana += 1;
                    exibirAnimacaoSemana();
                    break;
                case "jogar_minigame_otavio":
                    resolverDesafioOtavio(desafio_pergunta);
                    break;
                case "exibir_animacao_dormitorio":
                    exibirAnimacaoDormitório();
                    break;
                case "abrir_livro_otavio":
                    abrirLivroOtavio();
                    break;
                case "exibir_cena_transicao_dia_seguinte":
                    exibirAnimacaoDia();
                    break;
                case "exibir_lousa_requisitos_funcionais":
                    exibirLousaRequisitosFuncionais();
                    break;
                case "jogar_desafio_requisitos_funcionais":
                    jogarDesafioRequisitosFuncionais(desafio_requisitos_valor);
                    break;
                case "exibir_cena_transicao_2":
                    semana += 1;
                    exibirAnimacaoSemana2();
                    break;
                case "exibir_documentacao_corrigida":
                    exibirDocumentacaoCorrigida();
                    break;
                case "exibir_cena_transicao_faculdade":
                    exibirAnimacaoFaculdade();
                    break;
                case "jogar_teste_dinamico":
                    jogarJogoDaMemoria();
                    break;
                case "reportar_bugs":
                    reportarBugs();
                    break;
                case "exibir_cena_final":
                    exibirCenaFinal();
                    break;


            }





        }

        const jogarDesafioRequisitosFuncionais = (desafio_requisitos) => {

            const rectWidth = 160;
            const rectHeight = 96;
            const espaco_retangulos = 50;
            var enunciado_2;
            var valor_esperado = null;
            var verificar_btn;
            var btn_continuar;



            const video = this.add.video(centerX, centerY - 15, 'jogo_requisitos_funcionais');
            video.play();

            video.on('complete', function () {
                console.log("terminei");
            });


            switch (desafio_requisitos) {
                case 1:
                    enunciado_2 = this.add.image(centerX + 280, centerY - 90, 'jogo_relogio_1');
                    valor_esperado = "Verdadeiro";
                    break;
                case 2:
                    enunciado_2 = this.add.image(centerX + 280, centerY - 70, 'jogo_relogio_2');
                    valor_esperado = "Falso";
                    break;
                case 3:
                    enunciado_2 = this.add.image(centerX + 280, centerY - 90, 'jogo_relogio_3');
                    valor_esperado = "Falso";
                    break;
                case 4:
                    enunciado_2 = this.add.image(centerX + 280, centerY - 90, 'jogo_relogio_4');
                    valor_esperado = "Verdadeiro";
                    break;
                case 5:
                    enunciado_2 = this.add.image(centerX + 280, centerY - 60, 'jogo_relogio_5');
                    valor_esperado = "Falso";
                    break;

            }

            enunciado_2.setScale(0.9);

            const phrases = ["Verdadeiro", "Falso"];

            const rects = [];
            var selectedRect = null;

            const toggleBorderColor = (rect) => {
                if (selectedRect === rect) return;

                if (selectedRect) {
                    selectedRect.setStrokeStyle(0, 0x000000);
                }

                rect.setStrokeStyle(5, 0x00ff00);
                selectedRect = rect;
                console.log(selectedRect);
            };

            const createRectangle = (x, y, phrase) => {
                const rect = this.add.rectangle(x, y, rectWidth, rectHeight, 0xffffff);
                rect.setInteractive().on('pointerdown', () => {
                    toggleBorderColor(rect);
                });

                rect.on('pointerover', () => {
                    if (selectedRect !== rect) {
                        this.input.setDefaultCursor('pointer');
                    }
                });

                rect.on('pointerout', () => {
                    this.input.setDefaultCursor('default');
                });

                const text = this.add.text(x, y, phrase, { font: '18px Arial', fill: '#000000', align: 'center' });
                text.setOrigin(0.5);

                return rect;
            };

            const rect1 = createRectangle(centerX + 300 - rectWidth + espaco_retangulos, centerY - rectHeight + 180, phrases[0]);
            const rect2 = createRectangle(centerX + 600 - rectWidth - espaco_retangulos, centerY - rectHeight + 180, phrases[1]);

            rects.push(rect1, rect2);

            const resposta_certa = this.add.image(centerX + 300, centerY, 'resposta_correta');
            resposta_certa.setVisible(false);

            const resposta_errada = this.add.image(centerX + 300, centerY, 'resposta_errada');
            resposta_errada.setVisible(false);


            btn_continuar = this.add.image(centerX + 300, centerY + 90, 'continuar_btn_formatado');
            btn_continuar.setScale(0.9);
            btn_continuar.setInteractive();
            btn_continuar.setVisible(false);




            const verificarRetanguloSelecionado = () => {
                this.input.setDefaultCursor('default');
                if (!selectedRect) {
                    return null;
                }
                const index = rects.indexOf(selectedRect);
                return phrases[index];
            };

            var escala_botao = 0.5;
            verificar_btn = this.add.image(centerX + 290, centerY + 210, 'verificar_btn').setScale(0.8);
            verificar_btn.alpha = 1;
            verificar_btn.setScale(escala_botao);
            verificar_btn.setInteractive();

            verificar_btn.on('pointerover', () => {
                verificar_btn.setScale(escala_botao + 0.1);
                this.input.setDefaultCursor('pointer');
            });

            verificar_btn.on('pointerout', () => {
                verificar_btn.setScale(escala_botao);
                this.input.setDefaultCursor('default');
            });

            console.log(verificarRetanguloSelecionado());

            verificar_btn.on('pointerdown', () => {


                const opcaoSelecionada = verificarRetanguloSelecionado();
                desafio_requisitos += 1;
                console.log(desafio_requisitos);

                if (opcaoSelecionada == valor_esperado) {
                    console.log("correto  --- " + opcaoSelecionada + "  " + valor_esperado);
                    pontos_teste_estatico += 1;
                    pontos_totais+=1;
                    resposta_certa.setVisible(true);



                } else {
                    console.log("incorreto  --- " + opcaoSelecionada + "  " + valor_esperado);
                    resposta_errada.setVisible(true);
                }

                btn_continuar.setVisible(true);
                rect1.removeAllListeners();
                rect2.removeAllListeners();
                verificar_btn.removeAllListeners();



            });

            btn_continuar.on('pointerover', () => {
                btn_continuar.setScale(1);
                this.input.setDefaultCursor('pointer');
            });

            btn_continuar.on('pointerout', () => {
                btn_continuar.setScale(0.9);
                this.input.setDefaultCursor('default');
            });

            btn_continuar.on('pointerdown', () => {

                if (desafio_requisitos < 6) {

                    jogarDesafioRequisitosFuncionais(desafio_requisitos);

                }

                else if (pontos_teste_estatico > 3) {

                    construirTela(54);

                } else {
                    construirTela(59);
                }

            });





            construirHUD();


        }



        const descobrirAtividadesQA = () => {

            var verificar_btn;

            const background = this.add.image(450, 300, 'table');
            background.setScale(1.8);

            const enunciado = this.add.image(centerX, centerY - 240, 'enunciado_jogo_1');
            enunciado.setScale(0.8);

            const rectWidth = 200;
            const rectHeight = 120;
            const rectSpacing = 60; // Espaçamento maior entre os retângulos

            const phrases = [
                "Criar \nplanos de teste",
                "Codificar a \naplicação",
                "Realizar revisão da \ndocumentação",
                "Reportar \ncomportamentos \nnão esperados da \naplicação",
                "Priorizar as entregas \ndo time"
            ];

            const rects = [];
            const clickedRects = [];

            const toggleBorderColor = (rect) => {
                if (rect.borderVisible) {
                    rect.setStrokeStyle(0, 0x000000);
                    const index = clickedRects.indexOf(rect);
                    if (index !== -1) {
                        clickedRects.splice(index, 1);
                    }
                } else {
                    rect.setStrokeStyle(5, 0x00ff00);
                    clickedRects.push(rect);
                    console.log(clickedRects);
                }
                rect.borderVisible = !rect.borderVisible;
            };



            const createRectangle = (x, y, phrase) => {
                const rect = this.add.rectangle(x, y, rectWidth, rectHeight, 0xffffff);
                rect.setInteractive().on('pointerdown', () => {
                    toggleBorderColor(rect);
                });

                rect.on('pointerover', () => {

                    this.input.setDefaultCursor('pointer');

                });

                rect.on('pointerout', () => {

                    this.input.setDefaultCursor('default');
                });





                rect.borderVisible = false;

                const text = this.add.text(x, y, phrase, { font: '18px Arial', fill: '#000000', align: 'center' });
                text.setOrigin(0.5);

                return rect;
            };

            const rect1 = createRectangle(centerX - rectWidth - rectSpacing, centerY - rectHeight - rectSpacing + 90, phrases[0]);
            const rect2 = createRectangle(centerX, centerY - rectHeight - rectSpacing + 90, phrases[1]);
            const rect3 = createRectangle(centerX + rectWidth + rectSpacing, centerY - rectHeight - rectSpacing + 90, phrases[2]);
            const rect4 = createRectangle(centerX - rectWidth / 2 - 50, centerY + rectSpacing + 10, phrases[3]);
            const rect5 = createRectangle(centerX + rectWidth / 2 + 50, centerY + rectSpacing + 10, phrases[4]);

            rects.push(rect1, rect2, rect3, rect4, rect5);

            const verificarRetangulosClicados = () => {
                this.input.setDefaultCursor('default');
                const indexes = [0, 2, 3];
                for (let i = 0; i < indexes.length; i++) {
                    if (!clickedRects.includes(rects[indexes[i]])) {
                        return false; // Se algum retângulo não estiver no array clickedRects, retorna false
                    }
                }
                return true; // Se todos os retângulos estiverem no array clickedRects, retorna true
            };

            verificar_btn = this.add.image(centerX, centerY + 210, 'verificar_btn').setScale(0.8);
            verificar_btn.alpha = 1;
            verificar_btn.setScale(0.6);
            verificar_btn.setInteractive();

            verificar_btn.on('pointerdown', () => {
                var resultado = verificarRetangulosClicados();
                console.log(resultado);


                verificar_btn.destroy();
                rect1.destroy();
                rect2.destroy();
                rect3.destroy();
                rect4.destroy();
                rect5.destroy();
                background.destroy();
                enunciado.destroy();

                if (resultado) {
                    pontos_totais+=1;
                    construirTela(11);
                }
                else {
                    construirTela(12);

                }
            });

            verificar_btn.on('pointerover', () => {
                verificar_btn.setScale(0.7);
                this.input.setDefaultCursor('pointer');
            });

            verificar_btn.on('pointerout', () => {
                verificar_btn.setScale(0.6);
                this.input.setDefaultCursor('default');
            });




            console.log(verificarRetangulosClicados());



            construirHUD();



        }

        const reportarBugs = () => {

            var verificar_btn;

            const background = this.add.image(450, 300, 'table');
            background.setScale(1.8);

            const enunciado = this.add.image(centerX, centerY - 240, 'enunciado_jogo_1');
            enunciado.setScale(0.8);

            const rectWidth = 500;
            const rectHeight = 80;
            const rectSpacing = 20; // Espaçamento maior entre os retângulos

            const phrases = [
                "A mensagem de vitória aparece antes que \no jogador consiga concluir o jogo",
                "As cartas ainda são clicáveis mesmo após \no fim do jogo",
                "Nem todas as figuras possuem pares"
            ];

            const rects = [];
            const clickedRects = [];

            const toggleBorderColor = (rect) => {
                if (rect.borderVisible) {
                    rect.setStrokeStyle(0, 0x000000);
                    const index = clickedRects.indexOf(rect);
                    if (index !== -1) {
                        clickedRects.splice(index, 1);
                    }
                } else {
                    rect.setStrokeStyle(5, 0x00ff00);
                    clickedRects.push(rect);
                    console.log(clickedRects);
                }
                rect.borderVisible = !rect.borderVisible;
            };



            const createRectangle = (x, y, phrase) => {
                const rect = this.add.rectangle(x, y, rectWidth, rectHeight, 0xffffff);
                rect.setInteractive().on('pointerdown', () => {
                    toggleBorderColor(rect);
                });

                rect.on('pointerover', () => {

                    this.input.setDefaultCursor('pointer');

                });

                rect.on('pointerout', () => {

                    this.input.setDefaultCursor('default');
                });





                rect.borderVisible = false;

                const text = this.add.text(x, y, phrase, { font: '18px Arial', fill: '#000000', align: 'center' });
                text.setOrigin(0.5);

                return rect;
            };

            const rect1 = createRectangle(centerX, centerY - 160 - rectHeight / 2 + 90, phrases[0]);
            const rect2 = createRectangle(centerX, centerY - 150 - rectHeight / 2 + rectHeight + rectSpacing + 90, phrases[1]);
            const rect3 = createRectangle(centerX, centerY - 140 - rectHeight / 2 + (rectHeight + rectSpacing) * 2 + 90, phrases[2]);
            rects.push(rect1, rect2, rect3);

            const verificarRetangulosClicados = () => {
                this.input.setDefaultCursor('default');
                const indexes = [0, 1];
                for (let i = 0; i < indexes.length; i++) {
                    if (!clickedRects.includes(rects[indexes[i]])) {
                        return false; // Se algum retângulo não estiver no array clickedRects, retorna false
                    }
                }
                return true; // Se todos os retângulos estiverem no array clickedRects, retorna true
            };

            verificar_btn = this.add.image(centerX, centerY + 210, 'verificar_btn').setScale(0.8);
            verificar_btn.alpha = 1;
            verificar_btn.setScale(0.6);
            verificar_btn.setInteractive();

            verificar_btn.on('pointerdown', () => {
                var resultado = verificarRetangulosClicados();
                console.log(resultado);


                verificar_btn.destroy();
                rect1.destroy();
                rect2.destroy();
                rect3.destroy();
                background.destroy();
                enunciado.destroy();

                if (resultado) {
                    console.log("proxima tela");
                    pontos_totais+=1;
                    construirTela(78);
                }
                else {
                    construirTela(79);

                }
            });

            verificar_btn.on('pointerover', () => {
                verificar_btn.setScale(0.7);
                this.input.setDefaultCursor('pointer');
            });

            verificar_btn.on('pointerout', () => {
                verificar_btn.setScale(0.6);
                this.input.setDefaultCursor('default');
            });




            console.log(verificarRetangulosClicados());



            construirHUD();



        }

        const resolverDesafioOtavio = (desafio) => {

            const rectWidth = 200;
            const rectHeight = 120;
            const espaco_retangulos = 50;
            var enunciado_2;
            var valor_esperado = null;
            var resposta = null;
            var clicar_continuar = false;

            var btn_continuar;
            var verificar_btn;
            var continuar_btn;

            const background = this.add.image(450, 300, 'table');
            background.setScale(1.8);

            const enunciado = this.add.image(centerX, centerY - 240, 'enunciado_jogo_3');
            enunciado.setScale(1.1);


            switch (desafio) {
                case 1:
                    enunciado_2 = this.add.image(centerX, centerY - 130, 'enunciado_jogo_4');
                    valor_esperado = "Falso";
                    break;
                case 2:
                    enunciado_2 = this.add.image(centerX, centerY - 130, 'enunciado_jogo_5');
                    valor_esperado = "Falso";
                    break;
                case 3:
                    enunciado_2 = this.add.image(centerX, centerY - 130, 'enunciado_jogo_6');
                    valor_esperado = "Verdadeiro";
                    break;
            }

            enunciado_2.setScale(1.1);

            const phrases = ["Verdadeiro", "Falso"];

            const rects = [];
            var selectedRect = null;

            const toggleBorderColor = (rect) => {
                if (selectedRect === rect) return;

                if (selectedRect) {
                    selectedRect.setStrokeStyle(0, 0x000000);
                }

                rect.setStrokeStyle(5, 0x00ff00);
                selectedRect = rect;
                console.log(selectedRect);
            };

            const createRectangle = (x, y, phrase) => {
                const rect = this.add.rectangle(x, y, rectWidth, rectHeight, 0xffffff);
                rect.setInteractive().on('pointerdown', () => {
                    toggleBorderColor(rect);
                });

                rect.on('pointerover', () => {
                    if (selectedRect !== rect) {
                        this.input.setDefaultCursor('pointer');
                    }
                });

                rect.on('pointerout', () => {
                    this.input.setDefaultCursor('default');
                });

                const text = this.add.text(x, y, phrase, { font: '18px Arial', fill: '#000000', align: 'center' });
                text.setOrigin(0.5);

                return rect;
            };

            const rect1 = createRectangle(centerX - rectWidth + espaco_retangulos, centerY - rectHeight + 180, phrases[0]);
            const rect2 = createRectangle(centerX + rectWidth - espaco_retangulos, centerY - rectHeight + 180, phrases[1]);

            rects.push(rect1, rect2);

            const resposta_certa = this.add.image(centerX, centerY, 'resposta_correta');
            resposta_certa.setVisible(false);

            const resposta_errada = this.add.image(centerX, centerY, 'resposta_errada');
            resposta_errada.setVisible(false);

            btn_continuar = this.add.image(centerX, centerY + 90, 'continuar_btn_formatado');
            btn_continuar.setScale(0.9);
            btn_continuar.setInteractive();
            btn_continuar.setVisible(false);



            const verificarRetanguloSelecionado = () => {
                this.input.setDefaultCursor('default');
                if (!selectedRect) {
                    return null;
                }
                const index = rects.indexOf(selectedRect);
                return phrases[index];
            };

            verificar_btn = this.add.image(centerX, centerY + 210, 'verificar_btn').setScale(0.8);
            verificar_btn.alpha = 1;
            verificar_btn.setScale(0.6);
            verificar_btn.setInteractive();

            verificar_btn.on('pointerover', () => {
                verificar_btn.setScale(0.7);
                this.input.setDefaultCursor('pointer');
            });

            verificar_btn.on('pointerout', () => {
                verificar_btn.setScale(0.6);
                this.input.setDefaultCursor('default');
            });

            console.log(verificarRetanguloSelecionado());

            verificar_btn.on('pointerdown', () => {


                const opcaoSelecionada = verificarRetanguloSelecionado();
                desafio_pergunta += 1;
                console.log(desafio_pergunta);

                if (opcaoSelecionada == valor_esperado) {
                    console.log("correto  --- " + opcaoSelecionada + "  " + valor_esperado);
                    resposta_certa.setVisible(true);
                    pontos_pergunta += 1;
                    pontos_totais+=1;



                } else {
                    console.log("incorreto  --- " + opcaoSelecionada + "  " + valor_esperado);
                    resposta_errada.setVisible(true);

                }

                btn_continuar.setVisible(true);
                rect1.removeAllListeners();
                rect2.removeAllListeners();
                verificar_btn.removeAllListeners();


            });

            btn_continuar.on('pointerover', () => {
                btn_continuar.setScale(1);
                this.input.setDefaultCursor('pointer');
            });

            btn_continuar.on('pointerout', () => {
                btn_continuar.setScale(0.9);
                this.input.setDefaultCursor('default');
            });


            btn_continuar.on('pointerdown', () => {

                if (desafio_pergunta < 4) {

                    btn_continuar.removeAllListeners();
                    resolverDesafioOtavio(desafio_pergunta);

                } else if (pontos_pergunta > 2) {

                    enunciado_2.destroy();
                    btn_continuar.destroy();
                    verificar_btn.destroy();
                    rect1.destroy();
                    rect2.destroy();
                    construirTela(29);

                } else {
                    enunciado_2.destroy();
                    btn_continuar.destroy();
                    verificar_btn.destroy();
                    rect1.destroy();
                    rect2.destroy();
                    construirTela(30);

                }

            });













            construirHUD();



        }


        const exibir_cena_transicao_1 = () => {


            construirHUD();
        }




        const desenharTelaComputador = () => {

            var iniciar = false;

            const fundo = this.add.image(560, 340, 'laptop_jogo_1');

            var centerX = this.cameras.main.width / 2;
            var centerY = this.cameras.main.height / 1.35;

            // Adiciona o botão
            var button = this.add.rectangle(centerX, centerY, 180, 60, 0x00ff00);
            button.setInteractive();

            // Adiciona o texto "Iniciar" no botão
            var buttonText = this.add.text(centerX, centerY, 'Iniciar jogo', { fontFamily: 'Arial', fontSize: '26px', fill: '#000000' });
            buttonText.setOrigin(0.5);

            // Configura ação de clique do botão
            button.on('pointerdown', function () {
                // Ação a ser executada ao clicar no botão
                console.log('Botão clicado!');
                fundo.destroy();
                button.destroy();
                buttonText.destroy();
                jogarMinigamePrimeirafase();
            });

            construirHUD();

        }

        const jogarMinigamePrimeirafase = () => {

            let score = 0;
            let scoreText;
            let circle;
            let currentColor;

            const fundo = this.add.image(560, 340, 'laptop_fundo');

            scoreText = this.add.text(300, 300, 'Pontuação: 0', { fontSize: '24px', fill: '#fcba03' });

            const changeColor = () => {

                if (pause == false) {

                    const colors = [0x00ff00, 0xff0000, 0xffff00];
                    const randomColor = Phaser.Math.RND.pick(colors);
                    circle.setFillStyle(randomColor);
                    currentColor = randomColor;

                }
            };

            const criarCirculo = () => {
                circle = this.add.circle(400, 300, 50, 0x00ff00);
                circle.setInteractive();
                circle.on('pointerdown', () => {
                    if (currentColor === 0xff0000) {
                        score += 10;
                        scoreText.setText('Pontuação: ' + score);
                    }
                    else {
                        score -= 10;
                        scoreText.setText('Pontuação: ' + score);
                    }
                });

                // Troca de cor do círculo aleatoriamente a cada 5 segundos
                this.time.addEvent({ delay: 500, repeat: -1, callback: changeColor });

            }
            criarCirculo();
            construirHUD();
        };

        const jogarMiniGameOtavio = () => {
            var y_retangulo = centerY + 100;
            const target = this.add.rectangle(centerX, y_retangulo, 900, 100, 0x00ff00);
            target.setOrigin(0.5);
            target.depth = -1;

            var pos_inicial_blocos = 225;
            var incremento_pos_inicial = 220;
            var vetor_correcao = [];

            const particoes = [
                { x: pos_inicial_blocos, y: y_retangulo, ocupada: false },
                { x: pos_inicial_blocos + incremento_pos_inicial, y: y_retangulo, ocupada: false },
                { x: pos_inicial_blocos + 2 * incremento_pos_inicial, y: y_retangulo, ocupada: false },
                { x: pos_inicial_blocos + 3 * incremento_pos_inicial, y: y_retangulo, ocupada: false }
            ];

            const blocosTexto = [
                { texto: 'Bloco 1', cor: 0xffcc00, posicao: 0 },
                { texto: 'Bloco 2', cor: 0xff00cc, posicao: 1 },
                { texto: 'Bloco 3', cor: 0xcc00ff, posicao: 2 },
                { texto: 'Bloco 4', cor: 0x00ccff, posicao: 3 }
            ];

            const largura = 190;
            const altura = 50;
            const distanciaHorizontal = 35;

            const blocos = this.physics.add.group();

            let posX = (1300 - (blocosTexto.length * largura + (blocosTexto.length - 1) * distanciaHorizontal)) / 2;
            const posY = y_retangulo - 160;

            let botaoContinuar;
            let todosEspacosPreenchidos = false;

            for (let i = 0; i < blocosTexto.length; i++) {
                const texto = blocosTexto[i].texto;
                const cor = blocosTexto[i].cor;

                const bloco = this.add.rectangle(posX, posY, largura, altura, cor);
                const textoBloco = this.add.text(posX, posY, texto, { font: '24px Arial', fill: '#000000' });
                textoBloco.setOrigin(0.5);

                bloco.setInteractive();
                textoBloco.setInteractive();
                this.input.setDraggable(bloco);
                this.input.setDraggable(textoBloco);

                bloco.posicaoInicial = { x: posX, y: posY };
                textoBloco.posicaoInicial = { x: posX, y: posY };
                bloco.particaoIndex = -1;
                textoBloco.particaoIndex = -1;

                bloco.on('drag', function (pointer, dragX, dragY) {
                    this.x = dragX;
                    this.y = dragY;
                    textoBloco.x = dragX;
                    textoBloco.y = dragY;
                });



                textoBloco.on('drag', function (pointer, dragX, dragY) {
                    this.x = dragX;
                    this.y = dragY;
                    bloco.x = dragX;
                    bloco.y = dragY;

                });

                bloco.on('dragend', function () {
                    const boundsA = this.getBounds();
                    const particaoAnterior = particoes.find(particao => particao.ocupada === this);

                    if (particaoAnterior) {
                        particaoAnterior.ocupada = false;
                        this.particaoIndex = -1;
                    }

                    const particaoAtual = particoes.find(particao => {
                        if (particaoAnterior && particao === particaoAnterior) return false;
                        const boundsB = new Phaser.Geom.Rectangle(
                            particao.x - boundsA.width / 2,
                            particao.y - boundsA.height / 2,
                            boundsA.width,
                            boundsA.height
                        );
                        return Phaser.Geom.Intersects.RectangleToRectangle(boundsA, boundsB) && !particao.ocupada;
                    });

                    if (particaoAtual) {
                        particaoAtual.ocupada = true;
                        this.x = particaoAtual.x;
                        this.y = particaoAtual.y;
                        this.particaoIndex = particoes.indexOf(particaoAtual);
                        textoBloco.x = particaoAtual.x;
                        textoBloco.y = particaoAtual.y;

                    } else {
                        this.x = this.posicaoInicial.x;
                        this.y = this.posicaoInicial.y;
                        textoBloco.x = this.posicaoInicial.x;
                        textoBloco.y = this.posicaoInicial.y;
                    }

                    const todasParticoesOcupadas = particoes.every(particao => particao.ocupada);
                    if (todasParticoesOcupadas) {
                        todosEspacosPreenchidos = true;
                        botaoContinuar.setVisible(true);
                    }
                });

                textoBloco.on('dragend', function () {
                    const boundsA = this.getBounds();
                    const particaoAnterior = particoes.find(particao => particao.ocupada === this);

                    if (particaoAnterior) {
                        particaoAnterior.ocupada = false;
                        this.particaoIndex = -1;
                    }

                    const particaoAtual = particoes.find(particao => {
                        if (particaoAnterior && particao === particaoAnterior) return false;
                        const boundsB = new Phaser.Geom.Rectangle(
                            particao.x - boundsA.width / 2,
                            particao.y - boundsA.height / 2,
                            boundsA.width,
                            boundsA.height
                        );
                        return Phaser.Geom.Intersects.RectangleToRectangle(boundsA, boundsB) && !particao.ocupada;
                    });

                    if (particaoAtual) {
                        particaoAtual.ocupada = true;
                        this.x = particaoAtual.x;
                        this.y = particaoAtual.y;
                        this.particaoIndex = particoes.indexOf(particaoAtual);
                        bloco.x = particaoAtual.x;
                        bloco.y = particaoAtual.y;

                    } else {
                        this.x = this.posicaoInicial.x;
                        this.y = this.posicaoInicial.y;
                        bloco.x = this.posicaoInicial.x;
                        bloco.y = this.posicaoInicial.y;
                    }

                    const todasParticoesOcupadas = particoes.every(particao => particao.ocupada);
                    if (todasParticoesOcupadas) {
                        todosEspacosPreenchidos = true;
                        botaoContinuar.setVisible(true);
                    }
                });

                blocos.add(bloco);
                blocos.add(textoBloco);

                posX += largura + distanciaHorizontal;
            }

            botaoContinuar = this.add.sprite(centerX, y_retangulo + 130, 'continuar_btn_formatado');
            botaoContinuar.setOrigin(0.5);
            botaoContinuar.depth = 1;
            botaoContinuar.setInteractive();
            botaoContinuar.setVisible(false);

            botaoContinuar.on('pointerdown', function () {
                if (todosEspacosPreenchidos) {
                    particoes.forEach(particao => {
                        particao.ocupada = false;
                    });

                    blocos.children.each(function (bloco) {
                        bloco.x = bloco.posicaoInicial.x;
                        bloco.y = bloco.posicaoInicial.y;
                        bloco.particaoIndex = -1;
                    });

                    botaoContinuar.setVisible(false);
                    todosEspacosPreenchidos = false;
                }
            });


        };

        const jogarJogoDaMemoria = () => {

            let cards;
            let flippedCards = [];
            let canFlip = true;
            let numAttempts = 0;
            const maxAttempts = 3;
            let cards_restantes = 6;
            var botao_reiniciar;

            cards = this.add.group();

            const cardImages = ['card_1', 'card_2', 'card_3'];
            const numPairs = cardImages.length;

            const fundo = this.add.image(560, 340, 'fundo_jogo_memoria');
            vezes_que_pode_reiniciar_o_jogo -= 1;

            var textoDia = this.add.text(40, 80, 'Reinícios permitidos: ' + vezes_que_pode_reiniciar_o_jogo, { fontFamily: 'arial', fontSize: '24px', fill: '#1E8449' });




            for (let i = 0; i < numPairs; i++) {
                for (let j = 0; j < 2; j++) {
                    const card = this.add.image((centerX - 160) + 160 * i, (centerY - 130) + 200 * j, 'card_back').setScale(0.9, 0.9).setInteractive();
                    card.frontImage = cardImages[i];
                    card.isFlipped = false;

                    card.on('pointerup', () => {
                        flipCard(card);
                    });

                    card.on('pointerover', () => {
                        this.input.setDefaultCursor('pointer');
                    });

                    card.on('pointerout', () => {
                        this.input.setDefaultCursor('default');
                    });
                }
            }

            const jogo_vitoria = this.add.image(centerX, centerY - 30, 'jogo_vitoria');
            jogo_vitoria.setSize(0.9);
            jogo_vitoria.setVisible(false);

            // Função para virar uma carta
            const flipCard = (card) => {
                if (!canFlip || card.isFlipped) return;

                card.setTexture(card.frontImage);
                card.isFlipped = true;
                flippedCards.push(card);

                if (flippedCards.length === 2) {
                    canFlip = false;
                    setTimeout(() => {
                        checkCards();
                    }, 1000);
                }
            };

            // Função para verificar as cartas viradas
            const checkCards = () => {
                numAttempts++;

                if (flippedCards[0].frontImage === flippedCards[1].frontImage) {
                    flippedCards.forEach((card) => {
                        card.disableInteractive();
                        cards_restantes -= 1;

                        if (cards_restantes < 3) {
                            jogo_vitoria.setVisible(true);
                        }

                        console.log(cards_restantes);
                    });

                } else {
                    flippedCards.forEach((card) => {
                        card.setTexture('card_back');
                        card.isFlipped = false;
                    });


                }

                flippedCards.length = 0;
                canFlip = true;
            };


            var btn_continuar;
            btn_continuar = this.add.image(centerX + 320, centerY + 270, 'jogo_derrota');
            btn_continuar.setScale(0.7);

            btn_continuar.setVisible(true);
            btn_continuar.setInteractive();

            btn_continuar.on('pointerover', () => {
                btn_continuar.setScale(0.8);
                this.input.setDefaultCursor('pointer');
            });

            btn_continuar.on('pointerout', () => {
                btn_continuar.setScale(0.7);
                this.input.setDefaultCursor('default');
            });

            btn_continuar.on('pointerdown', () => {
                console.log(vezes_que_pode_reiniciar_o_jogo);

                if (vezes_que_pode_reiniciar_o_jogo > 0) {
                    btn_continuar.destroy();
                    jogarJogoDaMemoria();
                }
                else {
                    btn_continuar.destroy();
                    construirTela(74);
                }

            });

            construirHUD();

        };







        const construirHUD = () => {

            var relogio;
            // Desenhar barra preta com sombra e bordas arredondadas
            const barraPreta = this.add.graphics();
            barraPreta.fillStyle(0x000000);
            barraPreta.fillRoundedRect(0, 0, this.game.config.width, 55, 10);
            barraPreta.setAlpha(0.9);


            const bookIcon = this.add.image(1000, 30, 'book_icon').setScale(0.7);
            bookIcon.setInteractive(); // Habilitar interação com o ícone

            //const backpackIcon = this.add.image(930, 30, 'backpack_icon').setScale(0.7);
            //backpackIcon.setInteractive(); // Habilitar interação com o ícone

            var textoDia = this.add.text(40, 17, 'Semana: ' + semana, { fontFamily: 'acherus_grotesque', fontSize: '24px', fill: '#FFFFFF' });

            var texto_icone_livro = this.add.text(970, 20, "Referências", { fontFamily: 'Arial', fontSize: '12px', fill: '#FFFFFF' });
            texto_icone_livro.setVisible(false);

            // var texto_icone_inventario = this.add.text(900, 20, "Inventário", { fontFamily: 'Arial', fontSize: '12px', fill: '#FFFFFF' });
            //texto_icone_inventario.setVisible(false);


            bookIcon.on('pointerdown', () => {
                // Função para abrir a caixa de texto
                if (caixaTextoBookFechada) {
                    abrirCaixaDeTextoBook();
                    console.log(caixaTextoBookFechada);
                }

                else {
                    fecharCaixaDeTextoBook();
                    console.log(caixaTextoBookFechada);
                }

            });

            const abrirCaixaDeTextoBook = () => {
                //pause = true;
                caixaTextoBookFechada = false;
                caixaTextoBook = this.add.graphics();
                caixaTextoBook.fillStyle(0xFFFFFF);
                caixaTextoBook.fillRoundedRect(pos_x_caixa_texto_book, pos_y_caixa_texto_book, tam_x_caixa_texto_book, tam_y_caixa_texto_book, 10);

            };

            const fecharCaixaDeTextoBook = () => {
                //pause = false;
                caixaTextoBookFechada = true;
                //botaoAvancar.setInteractive();
                caixaTextoBook.destroy();

            };

            // Adicionar evento de clique no personagem para avançar para a próxima tela
            bookIcon.on('pointerover', () => {
                bookIcon.setScale(0.8);
                this.input.setDefaultCursor('pointer');


            });

            bookIcon.on('pointerout', () => {
                bookIcon.setScale(0.7);
                this.input.setDefaultCursor('default');
            });

        }



        // Iniciar a construção da primeira tela
        //jogarDesafioRequisitosFuncionais(1);
        iniciarJogo();
        //descobrirAtividadesQA();
        //resolverDesafioOtavio(desafio_pergunta);
        //abrirLivroOtavio();
        //jogarJogoDaMemoria();
        //exibirAnimacaoFaculdade();
        //exibirAnimacaoSemana();
    }
}

// Inicializa o jogo quando o documento é carregado
window.onload = function () {
    var game = new Game();
};
