import React from 'react'
import './BestSaler.css'
import {Row, Col} from 'react-bootstrap';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import content from '../static/test';
const useStyles = makeStyles({
    root: {
      maxWidth: 345,
    },
    media: {
      height: 140,
    },
});
function BestSaler() {
    const classes = useStyles();
    return (
        <div className="BestSaler-container">
           <Row>
               <Col>
               <h4>
                    Top bán chạy
               </h4>
               </Col>
           </Row>
           <Row>
               {
                   content.best_saler.map((item,key) => {
                       return (
                        <Col col lg="3" col md="4" className="itemBestSaler">
                            <Card className={classes.root}>
                                <CardActionArea>
                                    <CardMedia
                                    className={classes.media}
                                    image={item.thumbnail}
                                    title="Contemplative Reptile"
                                    />
                                    <CardContent>
                                    <Typography
                                    className="titleBestSaler">
                                        {item.title}
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                    </Typography>
                                    </CardContent>
                                </CardActionArea>
                                <div className="wrapInfo">
                                    <div className="author">{item.author}</div>
                                    <div className="price_sale">{item.price_sale == 0 ? "" : item.price_sale}</div>
                                </div>
                                <div className="wrapPriceAuth">
                                        <div className="priceAuth">
                                            <span className="priceAuth">
                                                {item.price_sale == 0 ? item.price : item.price_sale}
                                            </span>
                                        </div>
                                </div>
                            </Card>
                        </Col>
                       );
                   })
               }
           </Row>
        </div>
    )
}

export default BestSaler
