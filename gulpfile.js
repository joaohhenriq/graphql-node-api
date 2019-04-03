const gulp = require('gulp');7
const clean = require('gulp-clean');
const ts = require('gulp-typescript');

const tsProject = ts.createProject('tsconfig.json');

//compila o ts e gera o js
//o segundo parâmetro indica qual task deve ser executada antes desta, 
//pra depois esta executar
gulp.task('scripts', ['static'], () => {
    //compila nosso fonte (src) baseado no tsconfig.json
    const tsResult = tsProject.src()
        .pipe(tsProject());

    //pega o javascript que foi gerado e faz uma operação com ele
    return tsResult.js
        .pipe(gulp.dest('dist')); //setta um destino para o js compilado

    // PARA TESTAR PREVIAMENTE, USE O COMANDO: node_modules/.bin/gulp scripts
    // ONDE SCRIPTS É O NOME DA TASK CRIADA
});

// copia os arquivos estáticos do diretório src para o dist (arquivos json)
gulp.task('static', ['clean'], () => {
    return gulp
        .src(['src/**/*.json']) // seleciona os arquivos
        .pipe(gulp.dest('dist')); //coloca no local desejado
});

// exclui o diretório dist
gulp.task('clean', () => {
    return gulp
        .src('dist')
        .pipe(clean());
});

gulp.task('build', ['scripts']);

//tarefa para ficar escutando alterações nos diretórios abaixo, e buildar quando 
//tiver mudanças
gulp.task('watch', ['build'], () => {
    return gulp.watch(['src/**/*.ts', 'src/**/*.json'], ['build']);
});

//tarefa default, para inicar todo o processo
gulp.task('default', ['watch']);