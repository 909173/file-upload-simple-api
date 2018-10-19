"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Routes {
    routes(app) {
        app.route("/").get((req, res) => {
            res.status(200).send({
                message: "GET request successful"
            });
        }).post((req, res) => {
            return res.status(200).send({
                message: "Post request successful"
            });
        });
    }
}
exports.Routes = Routes;
//# sourceMappingURL=crmRoutes.js.map