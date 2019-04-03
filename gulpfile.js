const gulp = require('gulp');7
const clean = require('gulp-clean');
const ts = require('gulp-typescript');

const tsProject = ts.createProject('tsconfig.json');

gulp.task('scripts', () => {
    //compila nosso fonte (src) baseado no tsconfig.json
    const tsResult = tsProject.src()
        .pipe(tsProject());

    //pega o javascript que foi gerado e faz uma operação com ele
    return tsResult.js
        .pipe(gulp.dest('dist')); //setta um destino para o js compilado

    // PARA TESTAR PREVIAMENTE, USE O COMANDO: node_modules/.bin/gulp scripts
    // ONDE SCRIPTS É O NOME DA TASK CRIADA
})