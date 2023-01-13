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
import Card from "./card/index";
import Alert from "./alert/index";
import VirtualList from "./virtual-list/index";
import { VirtualListItem } from "./virtual-list/index";
import CountUp from "./count-up/index";
import Cell from "./cell/index";
import CellGroup from "./cell-group/index";
import Breadcrumb from "./breadcrumb/index";
import BreadcrumbItem from "./breadcrumb-item/index";
import Timeline from "./timeline/index";
import TimelineItem from "./timeline-item/index";
import CollapseTransition from "./collapse-transition/index";
import Collapse from "./collapse/index";
import CollapseItem from "./collapse-item/index";
import Steps from "./steps/index";
import Step from "./step/index";
import Dialog from "./dialog/index";
import Table from "./table/index";
import TableColumn from "./table-column/index";

const components: Component[] = [
    Icon,
    Button,
    Tag,
    Divider,
    Row,
    Col,
    Layout,
    Header,
    Footer,
    Aside,
    Main,
    Card,
    Alert,
    VirtualList,
    VirtualListItem,
    CountUp,
    CellGroup,
    Cell,
    Breadcrumb,
    BreadcrumbItem,
    Timeline,
    TimelineItem,
    CollapseTransition,
    Collapse,
    CollapseItem,
    Steps,
    Step,
    Dialog,
    Table,
    TableColumn,
];

export {
    Icon,
    Button,
    Tag,
    Divider,
    Row,
    Col,
    Layout,
    Header,
    Footer,
    Aside,
    Main,
    Card,
    Alert,
    VirtualList,
    VirtualListItem,
    CountUp,
    CellGroup,
    Cell,
    Breadcrumb,
    BreadcrumbItem,
    Timeline,
    TimelineItem,
    CollapseTransition,
    Collapse,
    CollapseItem,
    Steps,
    Step,
    Dialog,
    Table,
    TableColumn,
};

export default (app: App) => {
    components.forEach(comp => {
        app.component(comp.name as string, comp);
    });
};
