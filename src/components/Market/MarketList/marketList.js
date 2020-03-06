import React from 'react';
import './marketList.scss';
import marketExample from 'asset/images/marketEx.jpg';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
    root: {
      maxWidth: 345,
    },
    media: {
      height: 0,
      paddingTop: '56.25%', // 16:9
    },
  }));


const MarketList =()=> {
    const classes = useStyles();

    return(
        <div className="marketList">
        <Card className={classes.root}>
        <CardHeader
          title="하형이네 꼬치가게"
          subheader="야채,고기 꼬치 전문점"
        />
        <CardMedia
          className={classes.media}
          image={marketExample}
          title="Paella dish"
        />

        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            연락처: 02-999-999<br/>
            주소: 대구광역시 달성군 코로나를 조심합시다<br/>
            <a href="https://store.naver.com/restaurants/detail?id=1124028983">가게 정보</a>
          </Typography>
        </CardContent>
      </Card>
        </div>
    )
}

export default MarketList;