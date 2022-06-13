import React from "react";
import styled from 'styled-components'

const StyledSpinner = styled.svg` 
    position: fixed;
    top: calc(100vh - 220px - 1rem);
    right: 1rem;
    width: 220px;
    height: 220px;
    z-index: 1000;
`

const Spinner = React.forwardRef((props, ref) => {

    return (
        <StyledSpinner ref={ref} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 499.9921"><circle cx="249.9966" cy="249.9953" r="244.6649" fill="#2ea878"/><path d="M250.1675,499.9921c-5.7459,0-11.5073-.1964-17.3237-.5963C95.324,489.9379-8.8617,370.3617.5963,232.8424S129.6374-8.8556,267.15.5955A249.9877,249.9877,0,0,1,499.3966,267.1477l-5.3119-.3651,5.3119.3651C490.3391,398.8512,380.259,499.9921,250.1675,499.9921Zm-.3357-489.3435c-124.56,0-229.9382,96.8238-238.6116,222.9241C2.1655,365.2346,101.9128,479.7161,233.5741,488.7719c131.6688,9.0709,246.1434-90.6926,255.1986-222.3545A239.3392,239.3392,0,0,0,266.4194,11.2194Q258.0779,10.6457,249.8318,10.6486Z" fill="#14463d"/><path d="M459.6136,266.1378l-8.24-.25.1306-1.8269.0029-1.7079,10.1715-4.5712-9.8052-5.0416.1334-1.9089.0122-1.954,8.2146.3952,5.175-.8748-.1323,1.8674-.0242,2.2833-5.1115-.8528-4.9844.1606,9.922,5.2727-.0919.7788.0347.7211-10.3212,4.71,4.9849.3744,5.1612-.483-.1519,2.36-.0058,1.79Z" fill="#fccc43"/><path d="M460.694,226.7216l.6159,6.53,3.3418.6136.3848,4.0744L451.09,232.1722l-.0369-1.2572-.1965-1.1994,12.6161-8.3348.3859,4.0721Zm-1.984,1.0758-4.3309,2.9073,4.785,1.9032Z" fill="#fccc43"/><path d="M448.1005,210.6737l-.9417-4.0028c-1.0949-4.7041.6291-7.9673,4.7047-8.8617,4.2962-.9429,7.4138,1.4664,8.4365,6.5033l.7106,3.5255.7869,3.3-5.1548.4807-7.8743,2.38Zm9.8035-1.6478-.9383-4.2766c-.7846-3.5729-2.3191-5.193-4.4678-4.7215-2.0881.4576-2.78,2.4832-2.0251,5.9163l.9077,4.1356,6.4472-1.0157Z" fill="#fccc43"/><path d="M451.31,173.7523l3.0356,8.9784,1.1711,3.2066-5.0658,1.0747-7.5462,3.2793-1.055-3.2458-3.0847-8.7439,1.6149-.4923,1.5715-.6089,3.1205,9.0373,2.114-.491-2.6976-7.8126,1.9639-.6771,2.7166,7.87,2.17-.9013-3.2349-9.3667,1.6137-.4923Z" fill="#fccc43"/><path d="M424.5705,149.5382c-2.3532-4.0744-1.85-8.2574,1.939-10.4448,4.1628-2.4058,8.2366-.037,10.2305,3.4146,2.0025,3.4689,2.0308,8.1985-2.1331,10.6043C430.8185,155.3008,426.9238,153.6115,424.5705,149.5382Zm9.2512-5.3443c-1.4387-2.49-4.2969-4.2338-6.1827-3.1442-1.7067.9868-1.8569,3.8491-.1513,6.8026,1.7159,2.9709,4.2708,4.272,5.9792,3.2852C435.3533,150.0478,435.2915,146.7372,433.8217,144.1939Z" fill="#fccc43"/><path d="M423.7894,123.2962l1.4594,2.0649,1.0689,1.3312-4.5025,2.5583-6.1965,5.4091-1.9881-2.7721-5.587-7.3989,1.389-.9568,1.3155-1.0561,5.6719,7.6161,2.1666-1.3578-4.9976-6.71,1.6651-1.24,5.1074,6.8581.178-.1064Z" fill="#fccc43"/><path d="M395.4507,97.9139l2.1654-4.2916,1.8165,1.7576,1.2954,1.11L396.78,99.8367l-5.0843,6.4617-2.4381-2.3284-3.8347-3.4481c-2.7934-2.489-3.2245-4.5065-1.1509-6.7586,2.13-2.3122,4.3021-2.184,7.0539.35Zm-3.8156,3.7485,2.4093-2.222L389.918,95.64c-1.6015-1.4756-2.786-1.6454-3.455-.92-.6673.7257-.3455,1.86,1.2572,3.3372Z" fill="#fccc43"/><path d="M371.886,72.75l7.3734,5.4807,2.7866,1.9678-3.55,3.7671-4.3349,6.99-1.3387-1.0584-2.0753-1.4444,7.1648-7.1319-8.0788-5.77,1.0706-1.3554Z" fill="#fccc43"/><path d="M352.0872,64.5134,357.79,67.75l2.4179-2.3851,3.5573,2.02-12.7177,8.121-1.05-.691-1.0955-.5269.4-15.1131,3.5585,2.02Zm-.2565,2.2417-.1,5.2138,4.3014-2.8287Z" fill="#fccc43"/><path d="M336.4212,58.8756l.4714,2.3423,1.8882,7.1238-.19.4322-3.7052-1.634-.1179-7.4208-5.5043,4.9388L325.3726,62.94l.1982-.4518L332.23,59.16l2.0857-1.2133,1.3768-5.0531,1.7235.8285,1.7737.7141Z" fill="#fccc43"/><path d="M296.8687,46.7414a3.7743,3.7743,0,1,1,2.7339,4.7157A3.8484,3.8484,0,0,1,296.8687,46.7414Z" fill="#fccc43"/><path d="M269.4024,41.0932l-.3606,8.2355-1.8245-.156-1.7067-.0255-4.4367-10.231-5.1715,9.7388-1.9067-.1606-1.954-.037.5039-8.2077-.8031-5.1872,1.8638.1572,2.2828.0554-.921,5.0982.0936,4.9861,5.4056-9.85.7759.1017.7228-.0243,4.5718,10.3813.44-4.9792-.4149-5.1663,2.3585.1825,1.7893.03Z" fill="#fccc43"/><path d="M230.0284,39.472l6.5374-.5281.6586-3.3313,4.0785-.3294-5.9568,13.8652-1.256.02-1.2018.1791L224.7245,36.62l4.0784-.3282Zm1.0486,1.9991,2.8472,4.369,1.9679-4.7573Z" fill="#fccc43"/><path d="M213.7938,51.8442l-4.016.8886c-4.7192,1.0331-7.9581-.7349-8.7982-4.8231-.8857-4.31,1.5652-7.3954,6.616-8.35l3.5365-.6644,3.3111-.743.4108,5.1629,2.2747,7.9073Zm-1.516-9.8254-4.2894.88c-3.5844.7372-5.2258,2.25-4.7833,4.4049.4316,2.0949,2.4475,2.8137,5.89,2.1053l4.149-.8527-.93-6.4617Z" fill="#fccc43"/><path d="M176.9,48.1385l9.016-2.9166,3.2187-1.13,1.0105,5.0785,3.18,7.5861L190.0662,57.77l-8.782,2.97-.4708-1.6189-.5876-1.5808,9.0743-3.002-.4639-2.12-7.8443,2.5953-.6512-1.9713,7.9038-2.615-.8735-2.1793-9.406,3.1118-.4721-1.6189Z" fill="#fccc43"/><path d="M152.3325,74.5284c-4.1056,2.2983-8.2793,1.7379-10.4165-2.0811-2.348-4.1957.0774-8.2355,3.5556-10.1814,3.4954-1.9551,8.2244-1.9181,10.5719,2.2776C158.1806,68.3613,156.4381,72.2323,152.3325,74.5284Zm-5.2166-9.3228c-2.5087,1.4051-4.2905,4.2385-3.2291,6.1381.9648,1.7218,3.8248,1.91,6.8014.245,2.9928-1.6755,4.3286-4.2107,3.3655-5.9325C152.9906,63.7554,149.6806,63.7716,147.1159,65.2056Z" fill="#fccc43"/><path d="M126.0847,74.9559l2.084-1.4328,1.3456-1.0493,2.4954,4.5343,5.3223,6.2688-2.7992,1.9493-7.4705,5.483-.9389-1.4016-1.037-1.3289,7.6888-5.565-1.3265-2.184-6.7737,4.9029-1.2168-1.6812,6.9239-5.0116-.1034-.1791Z" fill="#fccc43"/><path d="M100.3246,102.9428l-4.2628-2.2279L97.846,98.92l1.1283-1.28,3.2939,3.9981,6.3935,5.18-2.3642,2.4058-3.5041,3.789c-2.5295,2.7594-4.5557,3.1627-6.7795,1.055-2.2845-2.1632-2.1239-4.3356.45-7.0522Zm3.6965,3.87-2.1886-2.4416-3.8612,4.0744c-1.4987,1.5819-1.6859,2.7652-.9683,3.4435.7153.6794,1.8569.372,3.3557-1.211Z" fill="#fccc43"/><path d="M74.8423,126.155l5.5806-7.2972,2.0049-2.76L86.1451,119.7l6.93,4.43-1.0758,1.3242-1.4739,2.0546-7.0319-7.2614-5.8793,7.9974-1.3416-1.0885Z" fill="#fccc43"/><path d="M66.3342,145.8221l3.3146-5.654-2.3486-2.45,2.069-3.5266,7.9355,12.8252-.706,1.04-.5425,1.0862-15.0981-.6147,2.069-3.5267Zm2.2365.2877,5.2091.1745-2.7657-4.339Z" fill="#fccc43"/><path d="M60.4728,161.4228l2.3486-.4368,7.1486-1.7853.43.1976-1.6882,3.68-7.42.0092,4.8579,5.5754L64.3756,172.53l-.4484-.2056-3.2314-6.7056-1.1833-2.103L54.48,162.0664l.8528-1.7124.7407-1.7622Z" fill="#fccc43"/><path d="M47.8059,200.802a3.7737,3.7737,0,1,1,4.75-2.6716A3.8469,3.8469,0,0,1,47.8059,200.802Z" fill="#fccc43"/><path d="M41.7816,228.1822l8.23.4761-.1808,1.8223-.05,1.7067-10.2934,4.29,9.6648,5.31-.1872,1.9031L48.9,245.6434l-8.2-.6205-5.1993.7314.1837-1.8627.089-2.281,5.0843.9926,4.9873-.0243-9.7735-5.5419.1133-.7753-.0139-.7223,10.4448-4.4245-4.9722-.5119-5.1733.3409.2166-2.3538.0561-1.79Z" fill="#fccc43"/><path d="M39.6213,267.5233l-.4391-6.5449-3.3233-.7038-.2727-4.0824,13.7843,6.1451.0017,1.256.1624,1.2052-12.8368,7.9882-.2744-4.0813Zm2.0129-1.02,4.4072-2.7894-4.7307-2.0314Z" fill="#fccc43"/><path d="M51.7636,283.95l.8319,4.0282c.9666,4.7342-.8493,7.9477-4.9479,8.73-4.3217.825-7.3734-1.67-8.2557-6.7344l-.613-3.5463-.6973-3.32L43.25,282.77l7.9385-2.1643Zm-9.8463,1.3774.82,4.3009c.6864,3.5948,2.1753,5.2565,4.3367,4.8451,2.1-.401,2.8478-2.4058,2.1892-5.86l-.7944-4.16-6.4745.8378Z" fill="#fccc43"/><path d="M47.5424,320.78l-2.7906-9.0593-1.085-3.2378,5.0947-.9371,7.6328-3.0749.9678,3.2748,2.8461,8.8259-1.6259.4483-1.59.5663-2.8749-9.12-2.1262.4334,2.4844,7.8841-1.9817.624-2.5023-7.9431-2.1932.8424,2.98,9.4534-1.627.4471Z" fill="#fccc43"/><path d="M73.6076,345.7212c2.24,4.1356,1.623,8.3036-2.2255,10.3882-4.2269,2.2891-8.2343-.1907-10.134-3.6954-1.9066-3.5232-1.8043-8.2527,2.4232-10.543C67.52,339.7864,71.3659,341.5833,73.6076,345.7212Zm-9.3961,5.0878c1.371,2.5294,4.1789,4.3506,6.0936,3.3129,1.7356-.9394,1.9644-3.7982.3392-6.7968-1.6339-3.0171-4.153-4.3875-5.8874-3.4481C62.8416,344.9147,62.8127,348.2252,64.2115,350.809Z" fill="#fccc43"/><path d="M73.6724,371.9748,72.27,369.8694l-1.0313-1.3612,4.5724-2.4312,6.3462-5.2334,1.91,2.8276,5.3772,7.5513-1.4155.9187L86.6859,373.16l-5.4576-7.7732-2.2024,1.2977,4.8064,6.8465-1.7,1.1925L77.22,367.7259l-.1808.1Z" fill="#fccc43"/><path d="M101.2964,398.1047l-2.2845,4.23-1.7691-1.8084L95.9792,399.38l4.042-3.2366,5.2669-6.32,2.3718,2.3977,3.7387,3.5556c2.723,2.5652,3.0985,4.5955.9614,6.791-2.1955,2.2521-4.3639,2.0615-7.0436-.5477Zm3.9218-3.6422-2.4728,2.155,4.0195,3.915c1.5611,1.5206,2.7421,1.724,3.43,1.0168s.3975-1.8523-1.1636-3.3706Z" fill="#fccc43"/><path d="M124.1469,423.8926l-7.2186-5.6817-2.7328-2.0442,3.6544-3.6688,4.5244-6.8673,1.3092,1.0943,2.0349,1.5022-7.3572,6.932,7.9159,5.99-1.1064,1.3254Z" fill="#fccc43"/><path d="M143.7077,432.6827l-5.609-3.3961-2.4843,2.318-3.499-2.1193,12.94-7.76,1.03.7188,1.0805.5581-.8245,15.0958-3.5-2.1181Zm.3189-2.2337.2467-5.2091-4.3777,2.7074Z" fill="#fccc43"/><path d="M159.21,438.748l-.4067-2.3549-1.6859-7.1724.2022-.4275,3.6566,1.739-.0912,7.42,5.6407-4.7827,3.8415,1.828-.2114.4449-6.7495,3.1395-2.1181,1.1556L159.77,444.75l-1.6992-.8782-1.7524-.7649Z" fill="#fccc43"/><path d="M198.4346,451.97a3.7748,3.7748,0,1,1-2.6046-4.7885A3.85,3.85,0,0,1,198.4346,451.97Z" fill="#fccc43"/><path d="M225.7183,458.3573l.5864-8.2262,1.8194.2057,1.7078.0717,4.1542,10.3535,5.44-9.5967,1.9014.2126,1.9523.0913-.7292,8.1939.6616,5.21-1.86-.21-2.28-.1167,1.06-5.0739.0433-4.9884L234.5,464.1858l-.7742-.1225-.7216.0035-4.2876-10.5061-.5778,4.9665.2733,5.1779-2.3526-.2473-1.7888-.0786Z" fill="#fccc43"/><path d="M265.03,461.0693l-6.55.3444-.7523,3.3129-4.0854.2126,6.3439-13.6941,1.256.0173,1.2076-.1468,7.8021,12.9546-4.086.2138Zm-.99-2.0279-2.7259-4.4476-2.1008,4.7018Z" fill="#fccc43"/><path d="M281.62,449.1547l4.0362-.7742c4.7452-.9013,7.9321.9579,8.6561,5.0658.7649,4.3309-1.7715,7.3446-6.8442,8.1557l-3.5521.5651-3.3285.6506-.2664-5.171-2.051-7.9628Zm1.2387,9.86,4.3113-.76c3.6017-.6367,5.283-2.1019,4.9011-4.2662-.3715-2.1042-2.3648-2.8808-5.8256-2.2695l-4.17.7361.7494,6.4813Z" fill="#fccc43"/><path d="M318.3713,453.8808l-9.0963,2.6647-3.25,1.04-.8678-5.1039-2.9674-7.675,3.2863-.9221,8.8623-2.7236.427,1.6316.5425,1.5969-9.157,2.7479.4045,2.1342,7.9153-2.3769.598,1.9875-7.9749,2.3943.8124,2.2047,9.4892-2.8495.4252,1.6327Z" fill="#fccc43"/><path d="M343.675,428.1576c4.1691-2.1851,8.329-1.51,10.3605,2.3677,2.2324,4.26-.3028,8.2343-3.8352,10.0854-3.55,1.8593-8.2788,1.6929-10.5119-2.5675C337.6564,434.1652,339.5047,430.3416,343.675,428.1576Zm4.9595,9.4673c2.55-1.337,4.41-4.12,3.4-6.05-.9169-1.7471-3.7722-2.0152-6.7945-.431-3.04,1.5923-4.4459,4.0929-3.53,5.84C342.7211,438.9144,346.0317,438.9884,348.6345,437.6249Z" fill="#fccc43"/><path d="M369.9315,428.4558l-2.1245,1.3727-1.3745,1.0123-2.3682-4.606-5.1467-6.4166,2.8529-1.8708,7.6254-5.2738.8984,1.4271,1,1.3577-7.8449,5.35,1.2647,2.2221,6.913-4.7134,1.1694,1.7148-7.0643,4.8174.0982.1814Z" fill="#fccc43"/><path d="M396.4456,401.1842l4.1974,2.3434-1.8321,1.7425-1.1647,1.2491-3.18-4.0871-6.245-5.3547,2.43-2.3376,3.6075-3.6873c2.6046-2.6866,4.6383-3.0344,6.802-.8666,2.2215,2.2255,2.002,4.391-.6447,7.0337Zm-3.5868-3.97,2.1187,2.5L398.95,395.75c1.5426-1.538,1.761-2.7154,1.0637-3.4134s-1.8454-.4229-3.3875,1.1151Z" fill="#fccc43"/><path d="M422.55,378.6664l-5.7736,7.1447-2.0788,2.7062-3.6191-3.7023-6.8089-4.6129,1.1122-1.2953,1.5276-2.0141,6.8355,7.4474,6.09-7.838,1.3115,1.1232Z" fill="#fccc43"/><path d="M431.6054,359.2559l-3.4741,5.5592,2.28,2.5168L428.2439,370.8l-7.575-13.047.7343-1.0192.572-1.0723,15.0814,1.04-2.1678,3.4678Zm-2.2285-.35-5.2039-.3213,2.6444,4.4165Z" fill="#fccc43"/><path d="M437.8747,343.8481l-2.36.3721-7.1966,1.5888-.4241-.2091,1.7876-3.6318,7.42.1929-4.7053-5.7071,1.8783-3.8156.4443.2173,3.0472,6.7922,1.1254,2.1342,4.9913,1.5877-.8995,1.6871-.7887,1.7414Z" fill="#fccc43"/><path d="M451.6278,304.826a3.7763,3.7763,0,1,1-4.8244,2.5421A3.85,3.85,0,0,1,451.6278,304.826Z" fill="#fccc43"/><path d="M123.3752,272.5344a56.4855,56.4855,0,0,0,15.02,32.7305c7.4054,8.1259,18.7883,13.7561,29.8128,18.5564,4.3257,1.8834,4.3375,3.987.0317,5.9154l-.0059.0026-1.0184.4576c-3.9486,1.7775-7.7494,3.6134-10.8842,6.5084-5.46,5.0194-7.0567,12.557-4.8773,23.0356,1.7039,8.1977,5.5038,16.2679,8.9911,23.0778a77.08,77.08,0,0,0,14.0839,19.3837c2.028,2.0513,4.8284,4.55,8.46,5.6118a14.8256,14.8256,0,0,0,5.6667.51,14.1994,14.1994,0,0,0,5.1516-1.5512,7.3329,7.3329,0,0,0,3.6158-3.7218c1.6951-4.3611-1.7132-8.56-4.2043-11.6287a20.167,20.167,0,0,1-1.9371-2.5939,108.1147,108.1147,0,0,1-5.7589-12.0736,46.6684,46.6684,0,0,1-3.5341-15.3852c-.19-4.4411-.0219-4.6554,4.362-5.3909l.0022,0,.0241-.004c9.4986-1.5733,17.1084-3.9869,23.6189-7.4362a48.0137,48.0137,0,0,0,9.3228-6.395,11.8517,11.8517,0,0,1,4.2674-2.2658,51.3775,51.3775,0,0,0,5.7026-2.0734c5.8539-2.52,8.1936.2116,4.8041,5.6088-.0148.0237,2.29-3.6465,0,0l-.0271.0435-.56.9c-2.2977,3.6924-4.4356,7.34-5.429,11.4691-1.7442,7.2127,1.1266,14.3646,8.7671,21.8536,5.9932,5.88,13.6265,10.4665,20.3011,14.1776a77.3476,77.3476,0,0,0,22.4821,8.2746,24.0056,24.0056,0,0,0,7.292.5452,14.4928,14.4928,0,0,0,11.2771-7.4735,7.26,7.26,0,0,0,.9379-5.0988c-1.02-4.5662-6.1868-6.16-9.9593-7.3214a21.2215,21.2215,0,0,1-3.0549-1.0769,108.9088,108.9088,0,0,1-11.5079-6.8369,47.0258,47.0258,0,0,1-11.2466-10.4833c-2.895-3.8581-2.8731-4.1727.6361-7.4821l.0025-.0024.02-.0188A75.364,75.364,0,0,0,279.26,335.806,59.3522,59.3522,0,0,0,285.776,301.39a57.9033,57.9033,0,0,0-.9623-6.0861,42.7,42.7,0,0,0-1.131-4.2959c-1.5682-4.8584-1.6436-4.3441,1.2122-8.5758l.0019-.0028.3537-.5244c4.5838-6.7882,9.1531-13.5522,15.3347-18.2272,4.6946-3.5449,10.285-4.966,16.2073-6.467a92.7116,92.7116,0,0,0,9.6685-2.8265c5.7861-2.156,13.2138-6.0818,15.7482-12.5659,1.7019-4.3505,1.3381-10.8958-2.2342-14.3287-2.3746-2.2761-5.8488-2.3681-9.0427-.2042-.826.5623-1.6335,1.14-2.4353,1.7164a27.5719,27.5719,0,0,1-7.1966,4.1853,49.3766,49.3766,0,0,1-9.2809,1.7989l-.0588.0077-2.6495.3538-.033.0044a69.6648,69.6648,0,0,1-9.629.8657c-3.9963-.02-4.8113-2.0529-5.5154-9.0249l-.0037-.036-.0816-.7838c-.5763-5.5366.8494-12.8125,4.3529-22.244.6054-1.6305.7994-2.03,1.88-1.9321,11.2913,1.0241,22.2735,4.2494,33.0521,7.7658l2.2181.7236.0425.0139a35.7257,35.7257,0,0,0,8.1358,1.9848,23.41,23.41,0,0,0,4.3753-.0755,57.2157,57.2157,0,0,0,5.9259-1.0308,92.8164,92.8164,0,0,0,13.5852-3.6028,16.6669,16.6669,0,0,0,6.8686-4.2305c1.8964-2.114,1.997-4.8393,2.4284-7.34.3885-2.2517,2.47-5.0322-28.7307-32.8974-.0656-.0586,5.1489-6.7585,5.6531-7.4269,2.44-3.2347,4.8613-6.4837,7.2321-9.7693,1.9483-2.7,3.8615-5.4257,5.68-8.216a21.6924,21.6924,0,0,0,2.6494-5.2862,27.9608,27.9608,0,0,0,1.148-5.8047c.2173-2.3976.1744-5.657-2.1027-7.1292a8.0971,8.0971,0,0,0-4.3255-1.0808c-6.1689-.2141-23.9641,1.1846-26.7446,1.6554a44.709,44.709,0,0,0-8.7688,2.7418l-.0569.0221-1.4354.553-.0166.0064c-10.5646,4.0522-21.9146,6.6-32.893,9.069a2.1781,2.1781,0,0,1-1.7389-.3457c-4.7386-3.3245-9.3955-6.28-14.5383-9.4934-5.24-3.2763-10.1951-6.3725-14.7725-9.6554-6.943-4.9817-14.1439-9.772-21.4006-14.2276-1.4965-.9216-3.73-1.8969-5.8831-1.2816a4.7476,4.7476,0,0,0-2.9587,2.4627,7.9891,7.9891,0,0,0-.2547,5.5607c.2611,1.1466,14.7374,42.6035,24.5725,61.2613l.05.0676c.3819.5135.3685.4479.2129,1.0687-.3081,1.2294-.6537,2.4492-.8772,3.6964-.6763,3.7447-1.0739,7.5511-1.4625,11.2262-.1713,1.6226-.3421,3.2507-.5364,4.87-.2865,1.7968-3.7188,9.3444-9.4291,19.9607a4.5346,4.5346,0,0,1-4.6631,2.4731c-4.1122-.7558-10.1367,1.4456-12.3254,5.7868a7.9273,7.9273,0,0,0-.746,4.5459,16.9689,16.9689,0,0,0,1.32,4.8058,11.9339,11.9339,0,0,1-.783,11.277c-3.3347,5.0835-5.4539,8.29-10.6285,15.2582a119.77,119.77,0,0,1-24.46,23.8209c-7.0314,5.064-15.6674,8.5486-23.1056,9.3228-11.3929,1.1859-18.7717-4.17-21.0351-10.0073a38.1766,38.1766,0,0,1-2.3368-9.8669c-1.2817-12.3128,2.8365-20.7422,5.5615-26.3219a20.8871,20.8871,0,0,0,2.1939-5.5913.8565.8565,0,0,0,.0148-.197l0-.0729c.0153-2.6992.1455-2.3861-1.7811-4.2768a6.743,6.743,0,0,0-5.41-1.9315C140.0072,227.7658,120.7331,247.1514,123.3752,272.5344Zm36.868,68.4189c2.5-2.3039,5.8362-3.9092,9.3289-5.4844l.033-.0149.9915-.4435c3.4538-1.5467,6.745-3.0892,9.7548-5.974a22.1785,22.1785,0,0,0,2.07-2.2582c.09-.1142.1877-.1853.2775-.3024.5151-.676.9294-1.408,1.3781-2.1231a26.413,26.413,0,0,0,4.167-13.1345c.0269-.8306-.0075-1.706-.0486-2.5919-.0819-1.9307-.1578-3.7487.4643-5.0722,1.2663-2.7061,3.9434-5.423,5.8475-7.2316a87.7431,87.7431,0,0,1,10.2695-8.3836,15.7446,15.7446,0,0,1,7.4-2.7719,17.5212,17.5212,0,0,1,9.5825,1.8491,22.6588,22.6588,0,0,1,10.4372,10.919,20.1858,20.1858,0,0,1,1.6737,5.9738c.0507.4328.1392.8616.159,1.2961a19.21,19.21,0,0,1-.4258,4.7478,33.5314,33.5314,0,0,1-1.4877,4.9236c-.12.3187-.2072.6113-.3389.94a51.3631,51.3631,0,0,1-2.3276,5.0393,55.641,55.641,0,0,1-10.8423,14.2652,52.1675,52.1675,0,0,1-4.0415,3.5408c-1.3329,1.0318-2.7594,1.9131-4.1818,2.8061-1.0366.65-2.0154,1.3928-3.0969,1.966a69.6985,69.6985,0,0,1-21.5089,6.7854l-.0363.006-5.7463.9686a3.5476,3.5476,0,0,0-3.4662,3.2779c-1.03,7.6487.1955,15.8791,3.6383,24.44a113.4344,113.4344,0,0,0,6.0646,12.7223,26.4435,26.4435,0,0,0,2.5061,3.43,23.3264,23.3264,0,0,1,3.1109,4.4979c.5646,1.3257.53,1.429-.7433,2.1046l-.0019.0009a8.8326,8.8326,0,0,1-6.4922.6021c-2.3507-.6852-4.34-2.4741-5.9753-4.13a71.7529,71.7529,0,0,1-13.0563-17.954c-3.31-6.4655-6.9052-14.0977-8.4767-21.623C155.3525,350.1322,156.3518,344.5337,160.2432,340.9533Zm16.5683-19.7375c-12.2582-5.19-26.1546-11.0749-34.1494-19.8426a50.8429,50.8429,0,0,1-13.5427-29.4367c-2.2573-21.6863,14.6544-38.6543,18.4808-39.1547a.8643.8643,0,0,1,.59.1673c.1771.1248.1778.1275.1049.3314-.2938.8226-.926,2.1142-1.4974,3.2875-2.8324,5.8007-7.5722,15.5026-6.1195,29.459a43.97,43.97,0,0,0,2.6965,11.3605c3.0544,7.8813,12.5955,15.1611,27.0175,13.66,8.3974-.8741,18.0751-4.7562,25.8871-10.3834a125.9338,125.9338,0,0,0,25.7143-25.0629c4.6039-6.2,3.7328-5.1207,5.5452-7.7333,4.1352-5.961,11.1-6.1569,15.6384-.4967,3.9465,4.9222,5.1833,8.922-.1023,14.7056a2.8884,2.8884,0,0,0,4.2618,3.9,17.4787,17.4787,0,0,0,4.8365-9.3037c.767-5.3107-1.9378-9.7511-4.5682-13.0141a113.2468,113.2468,0,0,1-8.9649-12.4651c-.0373-.0613-.0306-.05-.0686-.1113l-.0184-.03-.0244-.039-1.2058-1.9177c-.1628-.2567-.33-.53-.4951-.7934-.5736-.9071-1.13-1.8386-1.654-2.7891a14.97,14.97,0,0,1-1.9819-5.3265,2.2633,2.2633,0,0,1,.1585-1.3093c.8847-1.7422,4.1877-3.0216,6.1189-2.7179a5.66,5.66,0,0,1,1.03.2981,7.4519,7.4519,0,0,1,2.439,1.52,12.6159,12.6159,0,0,1,1.8217,2.0033c.07.0956.1324.196.2005.2917,1.1677,1.6164,2.2832,3.2631,3.3926,4.9195,3.2351,4.8233,6.5837,9.81,11.2778,13.7787a9.6918,9.6918,0,0,0,6.6529,2.8075,13.6327,13.6327,0,0,0,4.0471-.6268,2.888,2.888,0,0,0-1.6644-5.5311c-3.0346.9169-3.5866.4074-5.3036-1.0526-4.0792-3.4539-7.0591-7.8954-10.2135-12.5966-1.21-1.7965-2.4151-3.599-3.6855-5.34a3.6516,3.6516,0,0,1-.2633-3.9048c6.61-12.09,10.8243-21.2872,11.144-23.99.1971-1.6479.3711-3.2991.5507-4.9508.3767-3.5718.763-7.2693,1.4041-10.8063.0316-.1734.0907-.3411.1223-.5145.2063-1.1088.526-2.1918.7831-3.29s.4751-2.2042.7833-3.2881a73.4858,73.4858,0,0,1,3.0758-8.8553c2.6034-6.0944,5.4461-10.0533,8.9482-12.4705,3.2467-2.245,7.2835-3.3015,11.8346-4.3584l.0533-.0122,4.0685-.9249,3.4938-.7946c.0707-.0159.1426-.0333.2146-.0493,1.1955-.2676,2.4053-.548,3.6088-.8207,9.9806-2.2574,20.1581-4.7052,29.8726-8.434l.0281-.0108,1.4723-.5695.0371-.0144a39.9123,39.9123,0,0,1,7.6491-2.43c1.7967-.3078,11.7031-1.117,19.0787-1.45,1.8647-.0843,4.7464-.2621,6.3076-.3613,1.0175-.0646,1.1637.1013.9689,1.102a3.926,3.926,0,0,1-3.3026,3.5263c-7.4423.8459-19.7046,2.5141-22,2.9369-.9558.1733-3.6331.6823-24.7444,24.7791-.65.7424-1.37,1.575-2.0562,2.363-.18.2066-.3659.4209-.5481.6312-.5128.5892-1.0093,1.1583-1.5406,1.7736-2.0209,2.3338-4.138,4.7925-6.4575,7.5133l-.0018.0022a1.7786,1.7786,0,0,0-.6145,1.213,4.146,4.146,0,0,0,1.228,3.6259,20.478,20.478,0,0,0,1.4811,1.4824c.5649.5239,1.2406,1.1191,2.0072,1.7693.0824.07.1769.1475.2623.2187.59.4971,1.2035,1.0081,1.8892,1.5618.116.0929.2457.1956.3647.29.6326.5083,1.2624,1.0155,1.9612,1.56,11.5434,9.0028,31.3543,22.4348,36.4492,22.0405,2.0415-.1614,4.1654-.3485,6.2857-.5692a107.4363,107.4363,0,0,0,14.826-2.4c.05-.0131.0642.0028.0439.0507a.3227.3227,0,0,1-.05.092,11.5779,11.5779,0,0,1-4.587,2.6719,88.9381,88.9381,0,0,1-12.76,3.3637,21.8541,21.8541,0,0,1-15.453-.722l-.6575-.2151c-11.5583-3.7811-23.5284-6.2605-35.3039-8.4922q-1.4448-.2749-2.8834-.5448c-.9686-.1813-1.9436-.369-2.9078-.5486-.3542-.0659-.7145-.1361-1.0672-.2015l-.584-.1093c-3.5387-.658-7.5458-1.4033-10.5211-3.4581a13.7565,13.7565,0,0,1-4.1245-4.9645,17.9808,17.9808,0,0,1-1.3375-3.3438,20.3266,20.3266,0,0,1-.6984-3.4273,21.5555,21.5555,0,0,1-.2525-2.8613,2.8776,2.8776,0,0,0-2.79-2.9234c-.0557-.0018-.0458-.0014-.1015-.0036a2.5755,2.5755,0,0,0-1.4493.4317,2.8949,2.8949,0,0,0-1.4284,2.4154c-.0021.1292.0152.255.0145.3841.0007.075.0083.1479.009.223a27.3373,27.3373,0,0,0,.5558,5.3941c1.1863,5.65,4.1405,10.5255,8.3144,13.418,3.9906,2.7657,8.853,3.6658,12.7562,4.3936l.033.0062c.4385.0825.4789.1542.3187.5707-.0987.2566-.1978.5134-.2913.7663-3.8233,10.2813-5.3527,18.4129-4.6824,24.8526l.08.7679.0036.0349c.5712,5.6507,1.4451,14.1675,11.233,14.2193a74.428,74.428,0,0,0,10.4512-.9178l2.6345-.3527.0549-.0073a54.1875,54.1875,0,0,0,10.3513-2.0463,32.4378,32.4378,0,0,0,8.7585-4.9773c.76-.5441,1.5192-1.0937,2.2926-1.6165a3.3247,3.3247,0,0,1,1.2795-.5641.6372.6372,0,0,1,.5315.1488c1.6129,1.55,1.7867,5.6714.8553,8.0535-1.37,3.5051-5.7685,6.7924-12.3845,9.2558a86.4008,86.4008,0,0,1-9.0693,2.6451c-6.2205,1.5774-12.6513,3.2051-18.2757,7.4592-6.94,5.2468-11.7749,12.4064-16.451,19.3321l-.0381.0561-.5025.7351c-.524.78-1.0725,1.5441-1.6012,2.3214q-.8354,1.2288-1.6886,2.4481c-.3407.4863-.6629.9862-1.0111,1.4675-.2454.3389-.464.6225-.7072.9554a253.0135,253.0135,0,0,1-18.1159,22.5453q-3.0019,3.2724-6.1691,6.3748c-2.293,2.24-4.9607,4.6925-7.8931,7.1085-.7847.6466-1.584,1.2883-2.41,1.9236-.8085.6214-1.6511,1.2152-2.4971,1.8171q-.1405.1-.2818.1992c-3.1455,2.2129-4.9786.6-3.1795-2.7992l.0009-.0018c.49-.9321.8908-1.9285,1.3373-2.8964.4137-.9007.8761-1.77,1.2446-2.6968.07-.1731.1119-.3277.1791-.4992.4518-1.1612.8493-2.2856,1.1765-3.3644a27.1334,27.1334,0,0,0,1.3033-9.16,25.5985,25.5985,0,0,0-1.5133-7.4435,27.16,27.16,0,0,0-1.8823-4.07,28.6766,28.6766,0,0,0-12.0851-11.5923c-7.7688-3.8184-16.0813-3.3273-22.8336,1.3674a92.5263,92.5263,0,0,0-10.95,8.9307c-2.4357,2.3118-5.4406,5.42-7.1064,8.9729-1.2146,2.6044-1.0991,5.3481-1.0006,7.7647.0327.7508.0694,1.4841.0458,2.184a20.4665,20.4665,0,0,1-2.6561,9.1939A2.3728,2.3728,0,0,1,176.8115,321.2158Zm70.8535,4.7626c2.657-2.2362,4.1954-3.6183,7.1869-6.5422q3.2809-3.2079,6.3893-6.6019c4.5689-4.9765,9.1054-10.4948,14.1594-17.1784,1.8411-2.4347,3.133-2.1473,3.7644.8391l.0007.003a52.5965,52.5965,0,0,1,.8662,5.4894,53.59,53.59,0,0,1-5.8542,31.0815,69.9032,69.9032,0,0,1-14.1123,17.6034l-.0217.02-4.2468,4.0063a3.5645,3.5645,0,0,0-1.3913,2.0147,3.6539,3.6539,0,0,0,.3017,2.5713c3.4381,6.9908,9.03,13.1564,16.6478,18.3569a114.7046,114.7046,0,0,0,12.1238,7.1981,26.979,26.979,0,0,0,3.9966,1.4609,23.1121,23.1121,0,0,1,5.0852,2.0115c1.2012.7881,1.2289.8917.55,2.1576l-.001.0019a8.7283,8.7283,0,0,1-5.0665,4.111c-2.3165.7344-4.9746.3647-7.2577-.1065a71.8609,71.8609,0,0,1-20.8309-7.664c-6.3433-3.5244-13.5648-7.859-19.0655-13.2572-6.1559-6.0275-8.4386-11.2334-7.194-16.3811.7893-3.2826,2.5928-6.355,4.6928-9.7386l.0349-.0559.547-.87c2.5639-4.0877,4.9862-7.9433,5.3381-13.9329A9.3744,9.3744,0,0,1,247.665,325.9784Zm102.5211-174.71c-2.66,3.567-5.47,7.2807-8.2259,10.8577a2.8582,2.8582,0,0,0,.379,3.9123c11.0488,9.8069,23.3146,21.569,27.6721,26.9065a.6054.6054,0,0,1-.36,1.0552,158.7331,158.7331,0,0,1-18.2988,2.7269,11.4285,11.4285,0,0,1-6.4148-1.2585c-6.5587-3.4228-17.0008-10.3475-27.66-18.4288q-1.2489-.9459-2.3626-1.82c-.1868-.1464-.3555-.2826-.5361-.4247-.5887-.4668-1.1471-.9155-1.66-1.3383-.2171-.1794-.4146-.3467-.6166-.5178l-.0359-.03c-2.04-1.7187-2.0638-2.0259-.3221-4.046q1.3-1.5083,2.6068-3.0139c.8924-1.0278,1.77-2.03,2.6585-3.0453q.4863-.5566.97-1.1089c8.0444-9.1725,15.6465-17.5114,19.8776-21.6386a11.3282,11.3282,0,0,1,6.4155-3.1083c4.6371-.6352,10.7617-1.4467,17.6963-2.238h0c.0632-.0066.077.0163.042.0692-1.36,2.0537-3.2717,4.7811-5.4894,7.86C354.6056,145.298,352.4576,148.2221,350.1861,151.2681ZM238.7255,104.0393c7.1421,4.3882,14.227,9.1,21.06,14.0023,5.7131,4.0955,12.2159,8.0509,18.2528,11.8461,3.57,2.2442,3.4173,5.7431-.4839,7.3425a25.2993,25.2993,0,0,0-4.8257,2.5819c-5.83,4.02-9.0676,10.4811-10.9859,14.9745-1.1035,2.5848-2.8789,2.5863-4.03.0224-8.5388-19.0172-18.6488-47.7788-19.4166-50.212a1.5075,1.5075,0,0,1-.0559-.2079l-.0007-.0031c-.1045-.4688.0753-.5975.4863-.3467Z" fill="#14463d"/><path d="M285.3819,153.5836c2.4794.5315,4.3163,1.0463,5.3016,3.5535a7.8514,7.8514,0,0,1-.0212,5.7065,7.2,7.2,0,0,1-.2877.7359,5.3707,5.3707,0,0,1-1.089,1.4543,6.5139,6.5139,0,0,1-3.0309,1.4014,7.4188,7.4188,0,0,1-2.8906.1619,7.0146,7.0146,0,0,1-1.0225-.3443,9.6866,9.6866,0,0,1-5.3476-4.5948,5.8311,5.8311,0,0,1,.9195-5.861A7.4151,7.4151,0,0,1,285.3819,153.5836Z" fill="#14463d"/><path d="M356.57,188.3889c.6729,1.3029.0131,2.1-1.4357,1.3374-3.6881-1.9437-24.8169-10.9723-31.96-17.3046a9.8325,9.8325,0,0,1-1.9275-2.1611c-1.1215-1.882-.1645-3.31,4.0684-3.9093.3367-.0478.7039-.0874,1.0829-.124,1.1577-.1134,2.4712-.1871,4.0484-.1918a1.0958,1.0958,0,0,1,.6258.156l.0046.0031c.0674.0461.0554.038.1233.0832,3.9738,2.6456,20.2961,16.0059,24.8647,21.2891A3.6008,3.6008,0,0,1,356.57,188.3889Z" fill="#14463d"/><path d="M277.5543,137.23a25.3763,25.3763,0,0,0-4.826,2.5819c-5.83,4.02-9.0673,10.4812-10.9854,14.9747-1.1038,2.585-2.8792,2.5862-4.0306.0226-8.5386-19.0167-18.6486-47.7787-19.4164-50.2122a1.426,1.426,0,0,1-.0557-.2082c-.1058-.471.0743-.6.4852-.35,7.1421,4.3882,14.227,9.1,21.06,14.0022,5.7132,4.0961,12.2161,8.0511,18.2524,11.8463C281.6074,132.132,281.4549,135.6308,277.5543,137.23Z" fill="#fd803b"/><path d="M369.6517,194a.6052.6052,0,0,0,.3594-1.0552c-4.3575-5.3372-16.6232-17.0993-27.672-26.9071a2.8586,2.8586,0,0,1-.3788-3.912c2.7555-3.577,5.5663-7.2909,8.2257-10.8579,2.2715-3.0461,4.42-5.97,6.3357-8.6291,2.2177-3.0787,4.13-5.8067,5.4893-7.8605.0349-.0525.0212-.0759-.0419-.0693-6.9347.7912-13.0591,1.6031-17.6965,2.2382a11.3341,11.3341,0,0,0-6.4156,3.1081c-4.2307,4.1275-11.8334,12.466-19.8774,21.6386-.323.37-.6461.7377-.97,1.1089-.8881,1.0153-1.766,2.0181-2.6585,3.0452q-1.289,1.4875-2.5774,2.98c-1.77,2.0526-1.7456,2.3648.3286,4.1108.2021.17.4.3383.6166.517.5133.4229,1.0718.8722,1.66,1.3383.1807.1428.3493.2783.5361.4248q1.1115.873,2.3627,1.8208c10.6592,8.0807,21.1017,15.0058,27.66,18.4285a11.4305,11.4305,0,0,0,6.4151,1.2587A158.7915,158.7915,0,0,0,369.6517,194Zm-14.5171-4.274c-3.6881-1.9438-24.8169-10.9717-31.96-17.3047a9.8349,9.8349,0,0,1-1.9275-2.161c-1.1215-1.8821-.1644-3.31,4.0684-3.9093.3367-.0478.7039-.0875,1.0829-.1241,1.1577-.1134,2.4712-.1863,4.0484-.1917a1.0941,1.0941,0,0,1,.6258.156c.0726.05.06.0413.1282.0873,3.9738,2.6455,20.2957,16.0054,24.8644,21.288a3.6034,3.6034,0,0,1,.5051.8221C357.2433,189.6921,356.5835,190.4894,355.1346,189.7259Z" fill="#2ea878"/><path d="M238.3874,347.4355l.0345-.0561.5473-.8706c2.5642-4.0873,4.9867-7.9429,5.3385-13.9326a9.37,9.37,0,0,1,3.3576-6.5974c2.6562-2.237,4.195-3.6191,7.1865-6.5431q3.281-3.2078,6.3893-6.6018c4.569-4.9764,9.1057-10.4944,14.16-17.1777,1.841-2.435,3.1333-2.1477,3.7648.8414a52.57,52.57,0,0,1,.8662,5.4894,53.5892,53.5892,0,0,1-5.8542,31.0814,69.8982,69.8982,0,0,1-14.1125,17.6038l-.0213.0206-4.2468,4.0058a3.5691,3.5691,0,0,0-1.3915,2.0146,3.6538,3.6538,0,0,0,.3017,2.5713c3.4381,6.9908,9.03,13.1564,16.6478,18.357a114.713,114.713,0,0,0,12.1239,7.1981,26.9853,26.9853,0,0,0,3.9965,1.4608,23.2077,23.2077,0,0,1,5.08,2.008c1.2086.7907,1.2375.8912.5541,2.163a8.7285,8.7285,0,0,1-5.0666,4.111c-2.3164.7344-4.9746.3647-7.2577-.1064a71.864,71.864,0,0,1-20.8309-7.6641c-6.3433-3.5244-13.5648-7.8589-19.0655-13.2572-6.1559-6.0275-8.4386-11.2333-7.1939-16.3811C234.4841,353.8913,236.2878,350.8188,238.3874,347.4355Z" fill="#2ea878"/><path d="M169.5725,335.4682c.0176-.0075.0143-.0057.0325-.0147l.9915-.4434c3.4539-1.546,6.745-3.0893,9.7548-5.974a22.1882,22.1882,0,0,0,2.07-2.2582c.09-.1143.1877-.1854.2775-.3025.5151-.6759.9294-1.408,1.3781-2.1224a26.4176,26.4176,0,0,0,4.167-13.1351c.027-.8307-.0074-1.706-.0486-2.592-.0819-1.9307-.1577-3.7486.4643-5.0722,1.2663-2.7061,3.9434-5.423,5.8475-7.2315a87.7228,87.7228,0,0,1,10.2695-8.3836,15.7435,15.7435,0,0,1,7.4-2.7719,17.5211,17.5211,0,0,1,9.5825,1.849,22.6588,22.6588,0,0,1,10.4372,10.919,20.1866,20.1866,0,0,1,1.6737,5.9738c.0507.4328.1393.8616.159,1.2962a19.1953,19.1953,0,0,1-.4258,4.7478,33.53,33.53,0,0,1-1.4877,4.9235c-.12.3187-.2072.6113-.3388.94a51.3762,51.3762,0,0,1-2.3277,5.0394A55.6262,55.6262,0,0,1,218.6069,335.12a52.1675,52.1675,0,0,1-4.0415,3.5408c-1.3329,1.0318-2.7593,1.9132-4.1817,2.8069-1.0367.6494-2.0155,1.392-3.097,1.9653a69.6808,69.6808,0,0,1-21.5084,6.7856l-.0362.0059-5.7467.9689a3.5468,3.5468,0,0,0-3.4664,3.2774c-1.03,7.6487.1956,15.8792,3.6383,24.44a113.433,113.433,0,0,0,6.0646,12.7222,26.4394,26.4394,0,0,0,2.5061,3.43,23.4052,23.4052,0,0,1,3.1085,4.492c.57,1.3327.5376,1.4332-.7428,2.1115a8.8329,8.8329,0,0,1-6.4921.602c-2.3508-.6852-4.34-2.4741-5.9754-4.13a71.7493,71.7493,0,0,1-13.0563-17.954c-3.31-6.4655-6.9052-14.0977-8.4767-21.623-1.7508-8.4309-.7515-14.0294,3.14-17.61C162.7434,338.6492,166.0792,337.0439,169.5725,335.4682Z" fill="#2ea878"/><path d="M129.1193,271.9361a50.8435,50.8435,0,0,0,13.5427,29.4367c7.9948,8.7676,21.8914,14.6528,34.1492,19.8424a2.3725,2.3725,0,0,0,3.0038-.9675,20.4641,20.4641,0,0,0,2.6563-9.1945c.0236-.7-.013-1.4332-.0458-2.1839-.0985-2.4167-.214-5.16,1.0006-7.7647,1.6658-3.5529,4.6707-6.6611,7.1064-8.973a92.5362,92.5362,0,0,1,10.95-8.9307c6.7523-4.6947,15.0649-5.1857,22.8337-1.3674a28.6776,28.6776,0,0,1,12.085,11.5924,27.1809,27.1809,0,0,1,1.8823,4.07,25.5985,25.5985,0,0,1,1.5133,7.4435,27.1331,27.1331,0,0,1-1.3033,9.16c-.3271,1.0788-.7247,2.2032-1.1765,3.3645-.0672.1714-.1092.326-.1791.4992-.3685.9271-.8309,1.796-1.2446,2.6967-.4465.9679-.8473,1.9651-1.3372,2.8964-1.8,3.401.0329,5.0148,3.1784,2.8013.0945-.0659.1882-.1323.282-.1988.8459-.6026,1.6885-1.1964,2.4971-1.8178.8256-.6345,1.6249-1.2763,2.41-1.9235,2.9324-2.416,5.6-4.8683,7.8931-7.1086q3.1736-3.0945,6.1691-6.3747a253.0164,253.0164,0,0,0,18.1159-22.5454c.2432-.3329.4618-.6165.7072-.9553.3482-.4814.67-.9813,1.0111-1.4675q.8557-1.216,1.6886-2.4482c.5288-.7766,1.0772-1.541,1.6013-2.3214l.5025-.7348.0382-.0557c4.6765-6.9261,9.5108-14.0855,16.4508-19.3328,5.6244-4.2541,12.0552-5.8818,18.2758-7.4592a86.3838,86.3838,0,0,0,9.0693-2.6451c6.6159-2.4634,11.0141-5.7507,12.3844-9.2558.9314-2.3821.7576-6.5033-.8553-8.0535a.6372.6372,0,0,0-.5315-.1488,3.3262,3.3262,0,0,0-1.28.5641c-.7734.5228-1.5327,1.0725-2.2926,1.6165a32.4378,32.4378,0,0,1-8.7585,4.9773,54.1486,54.1486,0,0,1-10.3507,2.047c-.0308.0032-.0252.0026-.0552.0072l-2.6348.3522a74.4281,74.4281,0,0,1-10.4512.9177c-9.788-.0514-10.6617-8.568-11.2329-14.2185l-.0036-.0351-.08-.7685c-.67-6.44.8591-14.5713,4.6824-24.8525.09-.2419.1845-.4885.2794-.7344.1707-.4437.1273-.52-.34-.6089-3.9032-.7278-8.7656-1.6279-12.7562-4.3935-4.1738-2.8926-7.128-7.7678-8.3144-13.418a27.3383,27.3383,0,0,1-.5558-5.3942c-.0007-.075-.0083-.1479-.009-.223.0007-.1291-.0166-.2548-.0145-.3841a2.8946,2.8946,0,0,1,1.4284-2.4153,2.5829,2.5829,0,0,1,1.4492-.4316c.0556.0028.0456.0024.1018.0036a2.8781,2.8781,0,0,1,2.79,2.9232,21.5388,21.5388,0,0,0,.2524,2.8614,20.3212,20.3212,0,0,0,.6984,3.4272,17.949,17.949,0,0,0,1.3375,3.3438,13.7508,13.7508,0,0,0,4.1245,4.9645c2.9753,2.0549,6.9824,2.8,10.5211,3.4582l.5841.1093c.3526.0653.7129.1356,1.0672.2022.9641.1789,1.9391.3666,2.9077.5478q1.44.2712,2.8834.5448c11.7755,2.2317,23.7456,4.7112,35.304,8.4923l.6574.215a21.8541,21.8541,0,0,0,15.453.722,88.925,88.925,0,0,0,12.76-3.3637,11.5768,11.5768,0,0,0,4.587-2.6719.3.3,0,0,0,.05-.0916c.0206-.0475.0069-.0638-.0435-.0508a107.4424,107.4424,0,0,1-14.8261,2.3995c-2.12.2207-4.2443.4077-6.2858.5692-5.0949.3942-24.9058-13.0378-36.4491-22.04-.6989-.5453-1.3286-1.0525-1.9613-1.5607-.119-.094-.2487-.1967-.3647-.29-.6856-.5538-1.2987-1.0641-1.8891-1.5612-.0855-.0719-.18-.1485-.2624-.2193-.7666-.65-1.4423-1.2448-2.0071-1.7686a20.5922,20.5922,0,0,1-1.4812-1.4831,4.1465,4.1465,0,0,1-1.228-3.6259,1.7876,1.7876,0,0,1,.6163-1.2153c2.32-2.7207,4.4366-5.1794,6.4575-7.5133.5314-.6153,1.0278-1.1843,1.5406-1.7736.1822-.21.3684-.4239.5481-.6311.6864-.7873,1.4062-1.6207,2.0562-2.3631,21.1114-24.0961,23.7886-24.6058,24.7444-24.779,2.295-.4225,14.5577-2.0908,22-2.9364a3.3826,3.3826,0,0,0,2.6011-1.6486c1.362-2.1958.8516-3.0471-1.7274-2.8885-1.5438.0948-3.472.2076-4.8477.27-7.3749.3331-17.2817,1.1425-19.0784,1.45a39.94,39.94,0,0,0-7.6486,2.43l-.0375.0145-1.4724.5693c-.0149.0065-.0122.0048-.0279.0107-9.7142,3.7286-19.892,6.1772-29.8728,8.4338-1.2035.2727-2.4133.5532-3.6088.8208-.072.016-.1439.0334-.2146.0492l-3.4938.7946-4.0685.9254-.0533.0126c-4.551,1.0563-8.5881,2.113-11.8346,4.3576-3.5021,2.4172-6.3448,6.376-8.9482,12.47a73.4812,73.4812,0,0,0-3.0758,8.8554c-.3082,1.0839-.5261,2.191-.7833,3.288s-.5768,2.1808-.7831,3.29c-.0316.1734-.0907.3412-.1223.5146-.6411,3.5369-1.0274,7.2344-1.4041,10.8062-.18,1.6518-.3536,3.3029-.5507,4.9508-.32,2.7026-4.5336,11.9-11.1442,23.99a3.6534,3.6534,0,0,0,.2633,3.9049c1.2706,1.74,2.4753,3.5429,3.6857,5.3391,3.1544,4.7012,6.1343,9.1427,10.2135,12.5966,1.717,1.46,2.269,1.97,5.3036,1.0527a2.888,2.888,0,1,1,1.6644,5.531,13.6294,13.6294,0,0,1-4.0471.6268,9.692,9.692,0,0,1-6.6529-2.8075c-4.6941-3.9682-8.0427-8.9554-11.2778-13.7786-1.1094-1.6565-2.2249-3.3024-3.3925-4.9188-.0681-.0964-.131-.1962-.2005-.2924a12.6435,12.6435,0,0,0-1.8218-2.0034,7.4629,7.4629,0,0,0-2.439-1.5195,5.65,5.65,0,0,0-1.03-.2982c-1.9312-.3036-5.2342.9758-6.1189,2.7179a2.2644,2.2644,0,0,0-.1585,1.3093,14.9678,14.9678,0,0,0,1.9819,5.3265c.5242.9505,1.08,1.8821,1.654,2.7892.1649.2635.3323.5367.4951.7933l1.2061,1.9179.0239.0393.0188.03c.0382.0612.0314.05.0682.1112a113.2114,113.2114,0,0,0,8.9651,12.4643c2.63,3.2631,5.3352,7.7035,4.5682,13.0141a17.4783,17.4783,0,0,1-4.8365,9.3037,2.8884,2.8884,0,1,1-4.2617-3.9c5.2852-5.7831,4.0488-9.7831.1024-14.7052-4.5385-5.66-11.5032-5.4638-15.638.4965-1.8133,2.6128-.9418,1.534-5.5458,7.7332a125.9309,125.9309,0,0,1-25.7143,25.0628c-7.812,5.6272-17.49,9.5094-25.8871,10.3835-14.422,1.5011-23.963-5.7787-27.0175-13.66a43.9649,43.9649,0,0,1-2.6964-11.36c-1.4528-13.9565,3.2871-23.6584,6.1195-29.459.5711-1.173,1.2036-2.4643,1.4978-3.2874.0723-.2038.072-.2066-.1053-.3306a.8615.8615,0,0,0-.59-.1682C143.7737,233.2817,126.862,250.25,129.1193,271.9361Zm148.7941-116.14a7.4168,7.4168,0,0,1,7.4684-2.2134c2.4794.5316,4.3163,1.0463,5.3016,3.5535a7.8508,7.8508,0,0,1-.0212,5.7065,7.2,7.2,0,0,1-.2877.7359,5.3707,5.3707,0,0,1-1.089,1.4544,6.5128,6.5128,0,0,1-3.0309,1.4013,7.39,7.39,0,0,1-2.8906.162,7.0074,7.0074,0,0,1-1.0225-.3444,9.6835,9.6835,0,0,1-5.3476-4.5948A5.8314,5.8314,0,0,1,277.9134,155.7965Z" fill="#2ea878"/></StyledSpinner>
    )
}
)

export default Spinner; 