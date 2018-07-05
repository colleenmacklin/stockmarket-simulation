import * as React from 'react';
import { Cell, Legend, Pie, PieChart, ResponsiveContainer } from 'recharts';
import { Card } from '../../../components/Card/Card';
import { StockCategoryValue } from '../../../state/AppState';

interface StockShareCardProps {
    stockCategoryValues: StockCategoryValue[];
}

interface StockShareCardState {
}

export default class StockShareCard extends React.Component<StockShareCardProps, StockShareCardState> {

    constructor( props: StockShareCardProps ) {
        super( props );
    }

    render() {
        const {stockCategoryValues} = this.props;

        const data = stockCategoryValues;
        const pieData = data.map( ( value ) => {
            return {
                name: value.categoryName,
                value: value.ratio
            };
        } );
        // colors are taken from the variables.
        const colors = ['#3472F7', '#87CB16', '#943bea', '#FF9500', '#EE2D20'];

        return (
            <div className="content">
                <Card title={'Share of Stocks'} noFooter={true}>
                    <ResponsiveContainer height={170} width="100%">
                        <PieChart>
                            <Legend
                                iconSize={10}
                                align={'right'}
                                verticalAlign={'middle'}
                                layout={'vertical'}
                            />
                            <Pie
                                data={pieData}
                                label={false}
                                dataKey="value"
                                legendType="square"
                            >
                                {
                                    data.map( ( entry, index, array ) => (
                                        <Cell
                                            key={`cell-${index}`}
                                            fill={colors[index]}
                                            strokeWidth={array.length === 1 ? 0 : 1}
                                        />
                                    ) )
                                }
                            </Pie>
                        </PieChart>
                    </ResponsiveContainer>
                </Card>
            </div>
        );
    }
}