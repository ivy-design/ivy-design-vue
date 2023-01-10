import type { App, Component } from "vue";
import Icon from "./icon/index";
import Button from "./button/index";
import Tag from "./tag/index";
import Divider from "./divider/index";
import Row from "./row/index";
import Col from "./col/index";
import Layout from "./layout/index";
import Header from "./header/index";
import Footer from "./footer/index";
import Aside from "./aside/index";
import Main from "./main/index";

const components: Component[] = [Icon, Button, Tag, Divider, Row, Col, Layout, Header, Footer, Aside, Main];

export { Icon, Button, Tag, Divider, Row, Col, Layout, Header, Footer, Aside, Main };

export default (app: App) => {
    components.forEach(comp => {
        app.component(comp.name as string, comp);
    });
};
