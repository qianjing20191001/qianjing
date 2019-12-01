import { LightningElement } from 'lwc';

export default class TreeBasic extends LightningElement {
    items = [
        {
            label: '森林環境保全整備事業成績書',
            name: '1',
            expanded: true,
        },
        {
            label: '森林環境保全整備事業補助金調書',
            name: '2',
            expanded: true,
            
        },
        {
            label: '林野庁所管公共事業指導監督費総括表',
            name: '3',
            href: '',
         },
         {
            label: '指導監督費項目別内訳表',
            name: '4',
            href: '',
        },
        {
            label: '指導監督費内訳調書',
            name: '5',
            href: '',
         },
         {
            label: '指導監督費清算書',
            name: '6',
            href: '',
        },
        {
            label: '精算査定書',
            name: '7',
            href: '',
        },
        
    ];
}