import React from "react";
import ImageSlider from "../Slide/Slider";
import './ListPresenter.css'

export const ListPresenter = ({
    userDatas,
}) => {
    const check = () => {

    }

    return(
        <div>
            <div class="notice">로그인을 하셔야 상담 서비스를 이용하실 수 있습니다.</div>
            <ImageSlider/>
            <ul class="category-button-container">
                <li class="category-button">
                    <a href="" class="category-link">
                        <span class="category-text">전화타로</span>
                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABsAAAAbCAYAAACN1PRVAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAVgSURBVHgBrVZrbFRFFJ4zM3fv3d22uxVa5CWVCEjBGkKp1ZBgxAC/5AckRAKxDdJEjImiEQg2VhClIgQSCYmIDY9CI0jCHw2KLwyVh7EgGEEbqaiU0ufafdzXzDhzt7ss20Jb9Wz23jv3zDnfdx4zcwFlSOLFuiIunG2gYWpj+IX74GtaPPJ03tKnOtD/IJA5iLy6Z2fAZquQQEhIDci7ixGihJyzMeoASj53DNyYV738LIDS/gcwc82H54nlPjyYESPSjNLdRm1lFRqG4NTDjV1HC8FmJQNNEvIHQqQGiDA5Np2V7W81TEb/Bix4pbMYvORlCQBygvr7lkE2MKXtm8EpWKwg4MTW1h2J1R4ag4YDhnK0acAHLgPzaTFXI7dViTB0Jvh7zwwt4Syirb2nopsOzUVDBSOOmO/RTsUGKOlaEtCi5mIjxioyw7Z1cg3HEyWKgPwXaR3RE4nVu2va9xzLHRQMcV6GVRcKEJYPb3M0slqheV2JxHlTJ4vks3vLkpzARJulPMhMIyxrSpl43X+l/Xu1hO4I1nngkzxqs1E8WRNwdXrQEqwJYdyj4nMpjoY2V57jhNR5BOTfDMNZJPgjmc4UMd3mkwHcprY1e/p1NVUX/dLNci99XkoE8sfcUwzBTeA8rBwwnWz3nOnwI8jYGIV2xH051DVHZDrz0qy6FfGwgWChHF3oFxkG5BVXRtbDVZszrmtMjJcKN+7Da0M1z5xVekeWT+ZZlhH/Gu4VhQO1k/D84D9jFO3NXhpJMMudpVgxg560x42c4xCo4Tpea40unBl+59naNHPTLfHo+0ijya15aCCReuvevBdCjC7L7YqdiOw4MilDJffEVz5ooS6fINcR76XoiYItVd/0Y7yxYarZ3XuJco6Zoc/nzN2gOVk1k2FxP92qu2ynyUWzJmQcCLXEpxeXFKyY3Ys7ahumYgnkFZAjnMegvrt6X8WNfceD6l3X5o9C7sZDi63OSCOV+ROy9eJjw63EFWXZhByCWxKj8t8zhfhS+VLgErDIuHz5mBdZtLquQu916rINGQbBCXRhxkNyAVOvf+TF1ehNk/AFQZP/kEqNcioIsnzjC8rj1zurNJs9BwC3pdaWpaE4wcoEytqRkbduQC50r9sUSGqOC/w0AVIqqdwykpV3CX7TbO8pNpwsIJG0JYDLqTSa0n9DTB4vGcTSwgn+gnD+ZOqlkGG5Ofp3tps44LfEGSzgdgP1jPEfCcTWYeE3fkot1EFPKKn3meiCbIyp6XeUdLRFE0t92H9Y7iCFaRIoeVo4GH6Latrs/C1V5z1V5LX9C4htPy4b5UHAMJMwPg54Hytx6+7KOnZPG3P/iJ+vN2MmqJoSCxtPk78TUwIMatIR9dmYBv22M1dbUrR+eWt2htLStaNhut5mlRPHmcQ5ekxG/KgkQFBA32sbWr2vO/qZOiFcP92N8/07eFv0IhV9vjwgeSxpdKd/yUMvQWmpk5nRO8qVt+sn5jtOqX/02IvRzr9wKFAYQdeufyXT+IBD4Wpi2n1zAhevnqQCF6WAVOrMHN+6vE2Vm7P93RXMs996bIZ57cZRRMgEIjtUHTlcphMFA1NYIr7O54rK9IGKRMQsCK4KrV92cCBfeDAweHlhU1d+7iwJsD9JXSCLQk0cO6WaBBJ99eQgWhK5+tw7AQ0pMi86IXDrlsPztO64T8dANMabNIs1Cs5Hex2n4WZZmHnhd1devZufQSPzGAHwe5jVHOCsQmesQn6BNXEJpHTMr3/qTAyUDQbk+UHDkOgb9fN9kfjH8lQPqra3Atou2QjPD/UbclhgSiLVdUsNky1nDI4Htq3YPhzbfwCBj3dPfp+LoQAAAABJRU5ErkJggg==" alt="" />
                    </a>
                </li>
                <li class="category-button">
                    <a href="" class="category-link">
                        <span class="category-text">전화신점</span>
                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB0AAAAdCAYAAABWk2cPAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAU1SURBVHgB7VVrbBRVFD7n3pnZdrvbLi2FQGIfECJWQWtKjPIItiBYQKoJjYkmIvL0AaTRiI8fGowYqCDgD4MkBLRGiZFH0mJ4K28t4aWQaKwtrZDSLm3Y13Rm7j3emaVLoWsC/lRO+qM798z3fec7554BuBv/tUD4F0Frd48AM/4N5AaexHmT2uEOg8EdBq3YVgSx2G6wZKnsju4Kf9mQDXcY2j8d2LU7axEoi/uDG/Hl8pOpA13fAKZV5HrETFka+st8Wz1dlhK1amc5EM6yNfGbUVO1Jh12WnupsVGHfW0RsKXPy2B8PwRFNejBodAROXtLdjdkXSsGPrgYotZakGK8Cyt1foq/OfPhdPhp7bXPdJaART4gFxMUjl0Out+ArsjraXSHHCv0EphONgg5PgUsqYS2Er9tUj1iBQFlygfG+TFcMPUyIZueLp8jq4TyGUeJYwzoOqRQLg1rCtw2KWRlhr0qr4fU8WJiyw/FaMvcdOko5CgsQ1uJbLmBjAqhK54uX6OGBp9z3hzDQBvDGC8EHc9DwaA66IzaIEhPKmNXMuxE+il17SeZR0RIH27rSE2Jxi5gWZlN6+pXKuuZ1HgTy9QacdHUnzRxASu0BNQruQrAAdWFq5hnbxJAR1RDJiatIj+YPbG0pIoEOY8hItFHO3xgi6Q7RCe6120bDtfMNzzhPep5zAKr7lAZ4wP1E6Bz05PsAgjKhQOtY8Hv3wK9HjO8F0pGtwFnkf6Vktv+X5L/0sikEAKWbazP6WHlycFA7484NRvPjT/J8IVJYWXFdvflJId3R17ji6dshgzjV++ZLR6CSJipiTnu5d0amb59PZ/vHY2ODCXB+V5cVHkKBLzS1xLM8tf2MgB9sqdAxiJnmIRQkhMd8LMK8Gc40Bk/CELokJdd7ZhWlxa39tzaU9CwGDKNWRAxVyo32kDYE2TAP5NFrTWpHiM0Q+nTI7ESe7zpxaWTL6phez9lpyANEnJzLMD/EJn6QnLfjJjP6jXT9ypB5/paCwHjW1hW1UKmPR8Y64aQXgWaTixhL/cIXUiOphjgf9UlTFWawli9411Fthyk9I7IYOcwP7dCVTIMWq587QR9CzV/Vjt1dh9Vvc9UApphiH8CdJnPkyVnWz42zYfSgQQcUJNUlKxQNXhwzgycW17fy3PTPcWamR8IJl9UFjV7v205ii51nIBrsShkwkT0ZwzA+Y+fxgGB2eRjrWpgpuCcKa02OdGWHnjEx/hwSJAihCJXOGl4ygnoFX0J+1WaqvjAnyE4frpK2bVEbZYHFQCqYfm0i8tVuUufutgv/6ujI+Fy1wqIm1VKsEMgj+DA3M/gsfzv4Pz9AqtRpCUVH29fwBw2m6QYTYjbWV7Wepw3+TgdPhyEQx15bs7lfIOGzp3WQu9tCkFo0DhYUlnv3s9LtXWFQ0hn4OgEJflhyLYTTmN4ItrsHbUix6jb8bPwaRu1xZV1KVJa3bAB4ol5KQ10/cRgLSTZWeLyrOqNyRAGC4tK1dIodReGWrNx4HBM7eSTqlERlZOjbsAINe2PgkODUji9waEG33pmjfc9tQy534jjEyqjEPouXUsWqo9UobpAM7xJRQTeR5RaCn7VvwoEUZGmSTfMVO9Kjq3M4Advsrfji++HDGy3x0opqxjROHBkIaTZA7cbni5Db1J7uYH5jB9h6D27sPqB6E2k/V7aeqgA2q6W2BLvU50qUGLvUbs5pI4yVL0ZBKQjZ0JIoWxn3WobhdWHu50J2eTk6L+bRvB0cM6EDrgb/4v4G57zO2RyO0zbAAAAAElFTkSuQmCC" alt="" />
                    </a>
                </li>
                <li class="category-button">
                    <a href="" class="category-link">
                        <span class="category-text">전화사주</span>
                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAOzSURBVHgBnVZraFRHFD5nZu7dTei6TWitTQtGaf/UYFq0UPuntUlbkkhisRRsKGpboSU0GGq0lqZKwdpY8BExoIgv8BXUYEx8QvJDiU9UfCH+0IhKwB/Jxmj2cefOce7qrnvj3Qc57OPOnJnvO+fMmXMuQhaxmg/MFFx8QZYqRaIAAFcq4L8PlvWQod2LDTVdmfaj1yRdJMPuPjSPK/gHJL2tZ+KfxGpimoqxXcpQtwWKIrDs87h09racCEL/d0wK2rQPLPkxoCd/wgy9G/siFP5cFEx4B0eGm/jT8K+4Ym5f6irm2rKmY0pQyrMg7fTglGIbQbGP52036sp6+fTSuRAs+Dm6vrPE04PwqvZiv1Q9eqr4Fb8cUMYIBG60Ofq5RbPBtt9IqK2i4DTzx7JL8aUtRzYA56ux7uv7Lg98CPu11cWep4IEitMfuLTmN7G4eqE04PtUtTEUrkgOng7+TSPRtZAaovDKtvlo0TRIKwiWwW4lRnbAuONSK5qQXLmsdlDb2EprD9cmCfzMaIIsYoI5j4ji/hkDsQWpOpvUNZc5jdXdOqxl8Wfa3D0FHoWuZyMAIic9BxBwWD9PfImm45cPk7Hhmz4XaXPHIlXgO89UaLj8ZWZkEJ1VGqrQBe6I32wdDe4IKxy/X4QipQwIPwKE3IRSv9ojnzgI77+1xNOehZ88AIN/KHR+vJsTsPPHkZDjkAa/ANzcyhpn7c20TTESgjMWA1IAae8VAebnt0iT2sTE8ZexevoI5CjaLp/QIer3BHfKD4dBfC2vEusrzsIYhCOPMlB40VOrSTHPV4f1lWMCD7d2TrZGolcZvOm/4rVAMbiKDVV7YIziH7a/Ml4PnGT4U/kZMPmNV1KVo+sAacPxSdR86IRa1d5LrUenZiOQAqrwl/Kbz2uRKf4dfQ5Mqv7UsYpG/9N1/0uUNAMex3ZmAo+s66ymmDwQx3F+cFHVbuDslGuVQL+LkHS2vbCCbJX2atKe00VC2j+Yy+ZsTxLEZVxerSbpT4aK2HeundJqIoN16XAe0zQLPMGdWtU/tJg/UY2JOVdgnIYDT6xOp2zHL1W+OUN7dw5ykIFNbcGCWGA5kLEF68tvehLESXTjUQhdzKIP9FW/C1LOxL/m3MsEbq0++JkQZh0gX4INFX2purRViFa2z9cBXK6bvvMisQL//HaHS99yZBxwUWVHIrPAVj288r2dWFISG42TtcxF1h+u9En+qWRyqu7Vl3Tr1LxYqJtMSD/24O81PZn2PwNt3W0JcLHocwAAAABJRU5ErkJggg==" alt="" />
                    </a>
                </li>
                <li class="category-button">
                    <a href="" class="category-link">
                        <span class="category-text">후기모음</span>
                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB0AAAAdCAYAAABWk2cPAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAQfSURBVHgB7VZraFxFFP5m7iO72Wze5kGIUWofVG2NhCLVtFQNNpiKkh8GawmUahGCDUn8UV+gohSJFttQS5WKtPRHiobQR2gSavojRUswKqFqCF2SEBtiku52X9nde2ecO5tdEl232yXQ/ugHd/fMmXPPd+bMd+de4B7uNnDOVX6k76D4J0gDFOngcM+LmPc2o71nG9JAypXyb38qMKentysE2WC8BYb5EDR1SGQ4Do1cxwPlA+SlSncquVSkjLBDibCPQXgF+GK9EbNKGFVgyhiYuUXYKZEmbe/Njv4C3skVSdFYPQEb2wpVmYwHWOQqHUWp4wlSX3Vdui5P2vn3g0Vpkzp9vqNwDzTExqStfhyUu+IBYrFMU4ZJ47Nzcd/PV5sx7n4/Wd6E7eXHenchEH6cB8L1ZN5TzQ+eWw2ns4/s2TLIDVZBMlQXMrTj8Ab3UpNvkPd81V8D30K15QNjmfyLniB0/TJ545mulEiZL1RB/eFmYsmMsWKxeXuRafTIxRXkvYMSZxd5oSrA+3//En9ORBXMDB0hsxkmc8qxL9iCXOpKlP9/1cs+7R4mIfMxOcizt5Km2s+XdePohRosRHKx7/kuQoghfYfOt8Oz0CoD7Po50lZXlyh3fE9F1QUiUZu0OadEVYrh0A7ArnaysLFuGeGh8zsx6++FN9yJjgun4xMGXw+nfhJZtsOMYlXMbX7d9xEfGtJiY9le7uI2nO1tEi3Zz7+51C1c17wljg3Zr2yblfMjrpJlpZqsUSrX6pM/tDruf2r9brLpwWnLvHnqh0Lr5MKJgXWYdL+LYTrHR/gR8ggJE+NYX70y7zspqrQtrgOw6b/h0fs3k+c2+vEv8BMX12LC84doR1S9dr1Taal7+T9xg78W8R8nrpBgpEI6rAJVNWTka9up+nrNd1CUjhgfKPUiV9+ZiFBiJtAqCS0wDmrTzyQKI09unCGFWa+KfEY0VlyZ2n7ttdqBqHpV8gsihItkHhGUgeyyUVnD0FQmLl4pRYZKkZ/jYzd8b8Mb2rMkNRCMfMLbz7wXW6BofQD3OT8gu5/uRoljHFNuBbo6j7CZb2SoV60gKSSTqgGU5m3F5spSOG0fwv93pkxxafg0wnwM3sgoJudHKKEO8QiRpZwIhsqFitcsXmvF0ViJGc+b1nToRsiO7KwWvLWjGOWFO9Tggly1XKm6r3bpA3wgbkXMomjPrfaY+UwFobd6R8gtUsKWaWuotjo2iiY5czYWkvzAJ/EfCcopRyrQ6XSy6dt8n7Jbh8ga6QRWjjRFaPpKkqYaHppaiSy3F53n/Cv9NMT6EuBRRSpCRPEt5YirepktoClurFk1lixtcvU+XLoL1+Y2ieNLQ1nOLHPNNkCjpyiNsrAllTMqFGQSgxblfEaqygK4hzuFfwAmW5naCnddhwAAAABJRU5ErkJggg==" alt="" />
                    </a>
                </li>
            </ul>
            
            {
                userDatas.map((user, i)=>(
                    <div class="list-container">
                        <div class="list-wrap">
                            <div class="list">
                                <div class="list-top">
                                    <div class="list-img">
                                        <img src={user.face} alt="" />
                                        <div class="list-tag">
                                            <span class="tag">#신타로</span>
                                            <span class="tag">#재회적중</span>
                                            <span class="tag">#영적감각</span>
                                        </div>
                                    </div>
                                    <div class="list-info">
                                        <div class="list-counselor">
                                            <div class="list-counselor-info">
                                                <span class="nickname">{user.name}</span>
                                                <span class="category">{user.category}</span>
                                            </div>
                                            <span class="status">⦁ {user.status}</span>
                                        </div>
                                        <div class="list-counselor-content">
                                            <span class="content">{user.content}</span>
                                        </div>
                                        <div class="list-counselor-price">
                                            <span class="price">{user.price}원</span>
                                            <span class="unit">( 10초 )</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            }

        </div>
    );
};