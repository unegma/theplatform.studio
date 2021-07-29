import React from 'react';
import classes from './timelinePage.module.scss';
import clsx from 'clsx';

const mockTimeContent = [{
	id: "1",
	time: "2021-03",
  title: "Woooooo",
  content: "blablablabl",
  image: "234576.png"
}, {
	id: "2",
	time: "2021-07",
  title: "Laaaaaa",
  content: "bloobloobloo",
  image: "666666.png"
},{
	id: "3",
	time: "2021-12",
  title: "Looooooo",
  content: "chuchuchuchu",
  image: "??????.png"
}]

export default function TimelinePage(): JSX.Element {
	return (
    <div className={classes.wrapper}>
      this is timeline page
			<div className={classes.container}>
				<div className={classes.midLine} />
					{mockTimeContent.map((content, index) => {
						return (
							<div key={content.id} className={classes.cardWrapper}>
								<div className={clsx(classes.cardLine, {
									[classes.left]: index % 2 === 0,
									[classes.right]: index % 2 === 1
								})}
								/>
								<div className={clsx(classes.dot, {
									[classes.left]: index % 2 === 0,
									[classes.right]: index % 2 === 1
								})}
								/>
								<div className={clsx(classes.card, {
									[classes.left]: index % 2 === 0,
									[classes.right]: index % 2 === 1
								})}>
									<div>{content.title}</div>
									<div>{content.content}</div>
								</div>
							</div>
						)
					})}
			</div>
		</div>
	);
}