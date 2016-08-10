// Import React
import React from "react";
import {
    Appear,
    BlockQuote,
    Cite,
    CodePane,
    Deck,
    Fill,
    Heading,
    Image,
    Layout,
    Link,
    ListItem,
    List,
    Markdown,
    Quote,
    Slide,
    Spectacle,
    Text
} from "spectacle";
import preloader from "spectacle/lib/utils/preloader";
import createTheme from "spectacle/lib/themes/default";

// Import Spectacle Core tags

// Import image preloader util

// Import theme

// Import custom component

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");


const images = {
    logo: require("../assets/logo.svg"),
    preprocessors: require("../assets/css-preprocessors.png"),
    city: require("../assets/city.jpg"),
    thanks: require("../assets/thanks.gif"),

    weinen: require("../assets/weinen.jpg"),
    myth: require("../assets/myth.png"),
    feature: require("../assets/feature.jpg"),
    spiderman: require("../assets/spiderman.jpg"),
    debug: require("../assets/debug.jpg"),

    jones: require("../assets/jones.jpg"),
    trusted: require("../assets/trusted.png"),
    endless: require("../assets/endless.jpg"),
    questions: require("../assets/questions.jpg"),
    rtl1: require("../assets/rtl1.png"),
    rtl2: require("../assets/rtl2.png"),
    precss: require("../assets/precss.png")
};

preloader(images);

const theme = createTheme({
    primary: "#009be1"
});

export default class Presentation extends React.Component {
    render() {
        return (
            <Spectacle theme={theme}>
                <Deck transition={["slide"]} transitionDuration={500}>

                    <Slide bgColor="primary">
                        <Heading size={1} fit caps lineHeight={1}>
                            PostCSS
                        </Heading>
                        <Heading size={1} fit caps bgColor="black">
                            Beyond preprocessors
                        </Heading>
                    </Slide>

                    <Slide bgColor="black" bgImage={images.city.replace("/", "")} bgDarken={0.75}>
                        <Heading size={1} fit caps lineHeight={1}>
                            Background
                        </Heading>
                    </Slide>

                    <Slide bgColor="white">
                        <Image src={images.preprocessors.replace("/", "")} margin="0px auto 40px" height="293px"/>
                    </Slide>

                    <Slide bgColor="primary">
                        <Layout>
                            <Fill style={{margin: 5}}>
                                <CodePane
                                    textSize={20}
                                    lang="css"
                                    source={require("raw!../assets/code/sass_1.example")}
                                />
                            </Fill>
                            <Fill style={{margin: 5}}>
                                <CodePane
                                    textSize={20}
                                    lang="css"
                                    source={require("raw!../assets/code/sass_2.example")}
                                />
                            </Fill>
                        </Layout>
                    </Slide>

                    <Slide bgColor="white">
                        <Image src={images.logo.replace("/", "")} margin="0px auto 40px" height="293px"/>
                        <Heading size={2} fit textColor="black" textFont="primary">
                            https://github.com/postcss/postcss
                        </Heading>
                    </Slide>

                    <Slide bgColor="primary">
                        <Heading size={1} fit caps lineHeight={1}>
                            Trusted by industry leaders
                        </Heading>
                        <br/>
                        <Image src={images.trusted.replace("/", "")} margin="0px auto 40px" height="293px"/>

                        <Heading size={1} fit caps lineHeight={1}>
                            2.317.106 downloads in the last month!
                        </Heading>
                    </Slide>


                    <Slide bgColor="black">
                        <BlockQuote>
                            <Quote>Bootstrap 4 will be in SCSS. And if you care, v5 will likely be in PostCSS because holy crap that sounds cool.</Quote>
                            <Cite>Mark Otto</Cite>
                        </BlockQuote>
                    </Slide>

                    <Slide bgColor="primary">
                        <Heading size={2} fit caps textColor="white" textFont="primary">
                            What is it?
                        </Heading>
                    </Slide>

                    <Slide bgColor="black">
                        <BlockQuote>
                            <Quote>PostCSS is a tool for transforming CSS</Quote>
                        </BlockQuote>
                    </Slide>

                    <Slide bgColor="primary">
                        <Layout>
                            <Fill style={{margin: 5}}>
                                <CodePane
                                    textSize={20}
                                    lang="css"
                                    source={require("raw!../assets/code/postcss.example")}
                                />
                            </Fill>

                            <Fill style={{margin: 5}}>
                                <Appear>
                                <CodePane
                                    textSize={20}
                                    lang="css"
                                    source={require("raw!../assets/code/postcss.example")}
                                />
                                </Appear>
                            </Fill>
                        </Layout>
                    </Slide>

                    <Slide bgColor="black">
                        <BlockQuote>
                            <Quote>PostCSS is a tool for transforming CSS with JavaScript plugins</Quote>
                        </BlockQuote>
                    </Slide>

                    <Slide bgColor="white">
                        <Heading size={4} textColor="black" margin={10} padding={10}>
                            CSS
                        </Heading>

                        <Heading size={4} textColor="white" bgColor="primary" margin={10} padding={10}>
                            Parser
                        </Heading>

                        <Heading size={4} textColor="white" bgColor="black" margin={10} padding={10}>
                            PostCss Plugin
                        </Heading>

                        <Heading size={4} textColor="white" bgColor="black" margin={10} padding={10}>
                            PostCss Plugin
                        </Heading>

                        <Heading size={4} textColor="white" bgColor="primary" margin={10} padding={10}>
                            Stringifier
                        </Heading>

                        <Heading size={4} textColor="black" margin={10} padding={10}>
                            new CSS
                        </Heading>
                    </Slide>

                    <Slide bgColor="black" bgImage={images.myth.replace("/", "")} bgDarken={0.75}>
                        <Heading size={1} fit caps lineHeight={1}>
                            1) PostCSS is a Pre or a Postprocessor
                        </Heading>
                    </Slide>

                    <Slide bgColor="primary">
                        <Heading size={1} fit caps lineHeight={1}>
                            Preprocessor: postcss-each
                        </Heading>
                        <br/>
                        <Layout>
                            <Fill style={{margin: 5}}>
                                <CodePane
                                    textSize={20}
                                    lang="css"
                                    source={require("raw!../assets/code/each_1.example")}
                                />
                            </Fill>
                            <Fill style={{margin: 5}}>
                                <CodePane
                                    textSize={20}
                                    lang="css"
                                    source={require("raw!../assets/code/each_2.example")}
                                />
                            </Fill>
                        </Layout>
                    </Slide>


                    <Slide bgColor="primary">
                        <Heading size={1} fit caps lineHeight={1}>
                            Postprocessor: autoprefixer
                        </Heading>
                        <br/>
                        <Layout>
                            <Fill style={{margin: 5}}>
                                <CodePane
                                    textSize={18}
                                    lang="css"
                                    source={require("raw!../assets/code/autoprefix_1.example")}
                                />
                            </Fill>
                            <Fill style={{margin: 5}}>
                                <CodePane
                                    textSize={18}
                                    lang="css"
                                    source={require("raw!../assets/code/autoprefix_2.example")}
                                />
                            </Fill>
                        </Layout>
                    </Slide>


                    <Slide bgColor="primary">
                        <Layout>
                            <Fill>
                                <Heading size={4} caps textColor="secondary" bgColor="white" margin={10}>
                                    Preprocessor
                                </Heading>

                                <List textColor="white">
                                    <Appear><ListItem>postcss-nested</ListItem></Appear>
                                    <Appear><ListItem>postcss-simple-vars</ListItem></Appear>
                                    <Appear><ListItem>postcss-for</ListItem></Appear>
                                    <Appear><ListItem>postcss-conditionals</ListItem></Appear>
                                    <Appear><ListItem>postcss-each</ListItem></Appear>
                                    <Appear><ListItem>And...</ListItem></Appear>
                                </List>

                            </Fill>
                            <Fill>
                                <Heading size={4} caps textColor="secondary" bgColor="white" margin={10}>
                                    Postprocessor
                                </Heading>

                                <List textColor="white">
                                    <Appear><ListItem>autoprefixer</ListItem></Appear>
                                    <Appear><ListItem>postcss-rtlcss</ListItem></Appear>
                                    <Appear><ListItem>css-modules</ListItem></Appear>
                                    <Appear><ListItem>postcss-doiuse</ListItem></Appear>
                                    <Appear><ListItem>colorguard</ListItem></Appear>
                                    <Appear><ListItem>And...</ListItem></Appear>
                                </List>
                            </Fill>
                        </Layout>
                    </Slide>

                    <Slide bgColor="black" bgImage={images.myth.replace("/", "")} bgDarken={0.75}>
                        <Heading size={1} fit caps lineHeight={1}>
                            2) PostCSS is an Alternative<br/>to Preprocessors like Sass and Less
                        </Heading>
                    </Slide>


                    <Slide bgColor="black" bgImage={images.weinen.replace("/", "")}>
                        <Heading size={1} fit caps lineHeight={1}>
                            I like sass
                        </Heading>
                        <Heading size={1} fit caps lineHeight={1}>
                            more than postcss
                        </Heading>
                    </Slide>


                    <Slide bgColor="white">
                        <Heading size={4} textColor="black" margin={10} padding={10}>
                            SCSS
                        </Heading>

                        <Heading size={4} textColor="white" bgColor="primary" margin={10} padding={10}>
                            Run PostCss (Stylint)
                        </Heading>

                        <Heading size={4} textColor="white" bgColor="black" margin={10} padding={10}>
                            SCSS compilation step
                        </Heading>

                        <Heading size={4} textColor="white" bgColor="primary" margin={10} padding={10}>
                            Run PostCss (Autoprefixer)
                        </Heading>

                        <Heading size={4} textColor="black" margin={10} padding={10}>
                            CSS
                        </Heading>
                    </Slide>

                    <Slide bgColor="black" bgImage={images.jones.replace("/", "")} bgDarken={0.5}>
                        <Heading size={1} fit caps lineHeight={1}>
                            Or replace SASS compiler with postcss
                        </Heading>
                        <Heading size={1} fit caps lineHeight={1}>
                            And use the same Syntax!
                        </Heading>
                    </Slide>


                    <Slide bgColor="primary">
                        <Heading caps size={1}>
                            PreCSS
                        </Heading>
                        <br/>
                        <Image src={images.precss.replace("/", "")} margin="0px auto 40px" height="293px"/>

                        <Heading size={1} fit caps lineHeight={1}>
                            PreCSS is a tool that allows you to use <br/>Sass-like markup in your CSS files
                        </Heading>
                    </Slide>



                    <Slide bgColor="black" bgImage={images.myth.replace("/", "")} bgDarken={0.75}>
                        <Heading size={1} fit caps lineHeight={1}>
                            3) PostCSS Will Just Make My Tooling More Complex
                        </Heading>
                    </Slide>

                    <Slide bgColor="primary">
                        <CodePane
                            textSize={20}
                            lang="bash"
                            source={require("raw!../assets/code/install.example")}
                        />
                    </Slide>


                    <Slide bgColor="primary">
                        <CodePane
                            textSize={20}
                            lang="javascript"
                            source={require("raw!../assets/code/gulp.example")}
                        />
                    </Slide>

                    <Slide bgColor="black" bgImage={images.debug.replace("/", "")} bgDarken={0.5}>
                        <Heading size={1} fit caps lineHeight={1}>
                            PostCSS-Debug
                        </Heading>
                        <Heading size={1} fit caps lineHeight={1}>
                            Creates snapshots of your CSS files before/after each postcss plugin is run
                        </Heading>
                    </Slide>

                    <Slide bgColor="black" bgImage={images.myth.replace("/", "")} bgDarken={0.75}>
                        <Heading size={1} fit caps lineHeight={1}>
                            4) PostCSS Doesn’t Offer Me Anything<br/>
                            That My Current Preprocessor Doesn’t Provide Me
                        </Heading>
                    </Slide>

                    <Slide bgColor="primary">
                        <Heading size={1} fit caps lineHeight={1}>
                            postcss-custom-sectors (W3C specs)
                        </Heading>
                        <br/>
                        <Layout>
                            <Fill style={{margin: 5}}>
                                <CodePane
                                    textSize={20}
                                    lang="css"
                                    source={require("raw!../assets/code/selector_1.example")}
                                />
                            </Fill>
                            <Fill style={{margin: 5}}>
                                <CodePane
                                    textSize={20}
                                    lang="css"
                                    source={require("raw!../assets/code/selector_2.example")}
                                />
                            </Fill>
                        </Layout>
                    </Slide>

                    <Slide bgColor="black" bgImage={images.feature.replace("/", "")} bgDarken={0.5}>
                        <Heading size={1} fit caps lineHeight={1}>
                            CSSNEXT
                        </Heading>
                        <Heading size={1} fit caps lineHeight={1}>
                            Use tomorrow’s CSS syntax, today
                        </Heading>
                    </Slide>

                    <Slide bgColor="primary">
                        <CodePane
                            textSize={20}
                            lang="bash"
                            source={require("raw!../assets/code/doiuse.example")}
                        />

                        <br/>

                        <Heading size={4} textColor="white" caps lineHeight={1}>
                            doiuse?
                        </Heading>
                    </Slide>

                    <Slide bgColor="primary">
                        <Layout>
                            <Fill style={{margin: 5}}>
                                <CodePane
                                    textSize={15}
                                    lang="css"
                                    source={require("raw!../assets/code/modules_1.example")}
                                />
                            </Fill>
                            <Fill style={{margin: 5}}>
                                <CodePane
                                    textSize={15}
                                    lang="css"
                                    source={require("raw!../assets/code/modules_2.example")}
                                />
                            </Fill>
                            <Fill style={{margin: 5}}>

                                <CodePane
                                    textSize={15}
                                    lang="javascript"
                                    source={require("raw!../assets/code/modules_3.example")}
                                />

                                <br/>
                                <br/>
                                <br/>


                                <Heading size={1} fit caps lineHeight={1}>
                                    postcss-modules
                                </Heading>

                                <Heading size={1} fit caps lineHeight={1}>
                                    works perfectly with reactjs
                                </Heading>

                            </Fill>
                        </Layout>

                    </Slide>

                    <Slide bgColor="primary">
                        <Heading size={1} caps lineHeight={1}>
                            postcss-rtl
                        </Heading>
                        <br/>
                        <Layout>
                            <Fill style={{margin: 5}}>
                                <CodePane
                                    textSize={15}
                                    lang="css"
                                    source={require("raw!../assets/code/rtl_1.example")}
                                />
                            </Fill>
                            <Fill style={{margin: 5}}>
                                <CodePane
                                    textSize={15}
                                    lang="css"
                                    source={require("raw!../assets/code/rtl_2.example")}
                                />
                            </Fill>
                        </Layout>
                    </Slide>

                    <Slide bgColor="black">
                        <Layout>
                            <Fill style={{margin: 5}}>
                                <Image src={images.rtl1.replace("/", "")} height="450px"/>
                            </Fill>
                            <Fill style={{margin: 5}}>
                                <Image src={images.rtl2.replace("/", "")} height="450px"/>
                            </Fill>
                        </Layout>
                    </Slide>

                    <Slide bgColor="primary">
                        <CodePane
                            textSize={20}
                            lang="css"
                            source={require("raw!../assets/code/svg_1.example")}
                        />

                        <br/>

                        <Heading size={1} caps lineHeight={1}>
                            postcss-inline-svg
                        </Heading>

                        <br/>

                        <CodePane
                            textSize={20}
                            lang="css"
                            source={require("raw!../assets/code/svg_2.example")}
                        />
                    </Slide>

                    <Slide bgColor="primary">
                        <Heading size={1} caps lineHeight={1}>
                            postcss-german-stylesheets
                        </Heading>
                        <br/>
                        <Layout>
                            <Fill style={{margin: 5}}>
                                <CodePane
                                    textSize={20}
                                    lang="css"
                                    source={require("raw!../assets/code/german_1.example")}
                                />
                            </Fill>
                            <Fill style={{margin: 5}}>
                                <CodePane
                                    textSize={20}
                                    lang="css"
                                    source={require("raw!../assets/code/german_2.example")}
                                />
                            </Fill>
                        </Layout>
                    </Slide>

                    <Slide bgColor="black" bgImage={images.spiderman.replace("/", "")} bgDarken={0.5}>
                        <Heading size={1} fit caps lineHeight={1}>
                            With Great Power
                        </Heading>
                        <Heading size={1} fit caps lineHeight={1}>
                            Comes Great Responsibility
                        </Heading>
                    </Slide>


                    <Slide bgColor="primary">
                        <Layout>
                            <Fill style={{margin: 5}}>
                                <Heading size={1} fit caps lineHeight={1}>
                                    Lost
                                </Heading>

                                <br/>

                                <CodePane
                                    textSize={20}
                                    lang="css"
                                    source={require("raw!../assets/code/lost_1.example")}
                                />

                                <br/>

                                <Heading size={1} fit caps lineHeight={1}>
                                    fractional grid system
                                </Heading>
                                <Heading size={1} fit caps lineHeight={1}>
                                    built with calc()
                                </Heading>
                            </Fill>
                            <Fill style={{margin: 5}}>
                                <CodePane
                                    textSize={20}
                                    lang="css"
                                    source={require("raw!../assets/code/lost_2.example")}
                                />
                            </Fill>
                        </Layout>
                    </Slide>

                    <Slide bgImage={images.endless.replace("/", "")} bgDarken={0.75}>
                        <Heading size={1} fit caps lineHeight={1}>
                            and more...
                        </Heading>

                        <Heading size={1} fit caps lineHeight={1}>
                            StyleLint, StyleFmt, postcss-sprites, cssnano, postcss-safe-parser...
                        </Heading>
                    </Slide>

                    <Slide bgImage={images.questions.replace("/", "")} bgDarken={0.5}>
                        <Heading textColor="white" size={1} fit caps lineHeight={1}>
                            Questions?
                        </Heading>
                    </Slide>

                    <Slide bgImage={images.thanks.replace("/", "")} bgDarken={0.5}>
                        <Heading textColor="white" size={1} caps lineHeight={1}>
                            Thanks!
                        </Heading>
                    </Slide>

                </Deck>
            </Spectacle>
        );
    }
}
