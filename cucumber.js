let option = [
    "--require-module ts-node/register",
    "--require cucumber.config.ts",
    "--require stepDefinitions/**/*.ts",
    "--parallel 10",
    "--retry 2",
    "--format @cucumber/pretty-formatter",
    "--format json:.report/cucumber_report.json"
].join(" ");

let run_feature = ["./feature/", option].join(" ");

module.exports ={
    test_runner: run_feature
};
