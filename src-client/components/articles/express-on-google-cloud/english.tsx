import React from 'react';
import { ArticleContent } from '../article-data';
import { ArticleId } from '../article-id';
import { ArticleImage } from '../article-image';

export const english: ArticleContent = {
    title: 'Running express on Google Cloud',
    description: 'TODO',
    shareSentence: 'TODO',
    introduction: (
        <p>
            So you have just finished your splendid new node.js express app, it runs smoothly in
            your local environment and you are ready to make it available to the users who are
            eagerly awaiting for the release. The question now is... where to deploy it? Search no
            more! Google Cloud Platform is the place you've been looking for. Seamlessly deploy your
            app with a single command and let Google handle the scaling your app needs according to
            the users traffic.
        </p>
    ),
    body: (
        <React.Fragment>
            <h4>The conventional way</h4>
            <p>
                Before the appearance of cloud infrastructure providers (e.g. Google Cloud, Amazon
                Web Services, Microsoft Azure, etc.), the usual deployment process consisted in
                having a dedicated server or virtual machine in which the application was installed
                along with all the necessary requirements. Still this can be done today by creating
                a virtual machine in your cloud provider but it has some drawbacks:
            </p>
            <ul>
                <li>
                    <b>Scaling</b>: Any virtual machine has a computation limit. When enough users
                    start accessing the application at the same time, the virtual machine will not
                    be able to handle all their requests and some users will get timeout errors.
                    Also, even when there are no users accessing the app, the virtual machine is
                    still running and so increasing the monthly bill total.
                </li>
                <li>
                    <b>Machine management</b>: Having a dedicated virtual machine gives the highest
                    degree of freedom. And with great freedom comes great responsibility (remember
                    SpiderMan?). You will need to install the runtime, configure the environment,
                    expose the necessary network ports, manage the application from within the
                    virtual machine (start, stop, update, deploy, access the logs, etc.) and so on.
                </li>
            </ul>
            <ArticleImage
                articleId={ArticleId.expressOnGoogleCloud}
                alt="GCP virtual machines page"
                filename="gcp-compute-engine.png"
                footer="GCP virtual machines page"
            />
            <h4>The cloud way</h4>
            <p>
                Instead of managing dedicated virtual machines the current trend is to delegate the
                low-level layers (e.g. hardware, network, operating system, runtime, etc.) to a
                cloud provider and deploying the application on top of that. This approach is called
                PaaS (platform as a service) and it has many flavours and providers. In GCP there
                are three main categories: Google App Engine, Google Cloud Functions and Google
                Cloud Run.
            </p>
            <p>
                All the categories pursue the same goal but they achieve it in different manners.
                Cloud Run is meant to run applications containerized through Docker. Cloud Functions
                is designed to run single functions, for a mobile app backend for example. App
                Engine is the best choice for web applications, adding additional capabilities that
                Cloud Functions do not include (e.g. easier database connections). You can read more
                about it in{' '}
                <a
                    href="https://cloud.google.com/docs/overview/cloud-platform-services"
                    target="_blank"
                >
                    GCP documentation
                </a>
                .
            </p>
            <h4>Simple yet realistic app</h4>
            <p>
                You can host any kind of application in GCP (Google Cloud Platform) so before
                jumping into it let's have a look at the nature of web app that will be deployed.
                For this example I developed a web Api connected to a mySQL database. I used{' '}
                <a href="https://nestjs.com/" target="_blank">
                    NestJS
                </a>
                , one of the most popular node.js frameworks, which supports Typescript (is built
                with it), has a good community adoption (other developers will have an easier time
                joining the project) and simplifies certain parts of the development process.
            </p>
            <p>
                The Api itself is simple. It exposes a collection of jokes (spanish content),
                allowing to fetch them by id or through text match. It has the following three
                endpoints only, which you can test at{' '}
                <a href="https://bromuro-api.oa.r.appspot.com/" target="_blank">
                    https://bromuro-api.oa.r.appspot.com/
                </a>{' '}
                if the gcp app is still running (in case the gcp app is shutdown, you can clone{' '}
                <a href="https://github.com/capelski/bromuro-api" target="_blank">
                    this repository
                </a>
                , run the project using docker-compose and access it at{' '}
                <a href="http://localhost:3000" target="_blank">
                    localhost:3000
                </a>
                ).
            </p>
            <ArticleImage
                articleId={ArticleId.expressOnGoogleCloud}
                alt="Web api endpoints"
                className="image-600"
                filename="swagger-ui.png"
                footer="Web api endpoints"
            />
            <p>
                <i>
                    This interactive documentation is using{' '}
                    <a href="https://swagger.io/" target="_blank">
                        swagger
                    </a>
                    , an OpenAPI Specification standard, through a NestJS module which automatically
                    generates the interactive page based on code annotations. The coolest part of
                    swagger is that you can make actual calls to the endpoints, providing the
                    parameters and getting a real response:
                </i>
            </p>
            <ArticleImage
                articleId={ArticleId.expressOnGoogleCloud}
                alt="Web api endpoint call example"
                className="image-600"
                filename="swagger-call.png"
                footer="Web api endpoint call example"
            />
            <h4>Google App Engine</h4>
        </React.Fragment>
    )
};
