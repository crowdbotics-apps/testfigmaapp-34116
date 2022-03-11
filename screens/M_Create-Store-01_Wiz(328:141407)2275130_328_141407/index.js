import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet,
  ScrollView
} from "react-native"
import Icon from "react-native-vector-icons/FontAwesome"
import { CheckBox } from "react-native-elements"
import { connect } from "react-redux"
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen"
import { getNavigationScreen } from "@screens"
export class Blank extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }
  render = () => (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      style={styles.ScrollView_1}
    >
      <View style={styles.View_2} />
      <View style={styles.View_328_141408}>
        <View style={styles.View_328_141409}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7956/2f06/7518546badd9b94d0dd21ee508b3590d"
            }}
            style={styles.ImageBackground_I328_141409_492_5923}
          />
        </View>
        <View style={styles.View_328_141410}>
          <View style={styles.View_I328_141410_2_34788}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e979/e4a6/afbfe3f84f17cc76e8c6461b93a73576"
              }}
              style={styles.ImageBackground_I328_141410_2_34788_2_34791}
            />
          </View>
        </View>
        <View style={styles.View_328_141411}>
          <Text style={styles.Text_328_141411}>Create a store</Text>
        </View>
      </View>
      <View style={styles.View_328_141434}>
        <Text style={styles.Text_328_141434}>Welcome to DigiAuction</Text>
      </View>
      <View style={styles.View_328_141435}>
        <View style={styles.View_328_141436}>
          <View style={styles.View_328_141437}>
            <View style={styles.View_I328_141437_2811_136013}>
              <View style={styles.View_I328_141437_2811_136013_2811_135855}>
                <View style={styles.View_I328_141437_2811_136013_2811_135856}>
                  <View
                    style={
                      styles.View_I328_141437_2811_136013_2811_135856_446_6462
                    }
                  >
                    <View
                      style={
                        styles.View_I328_141437_2811_136013_2811_135856_446_6463
                      }
                    >
                      <View
                        style={
                          styles.View_I328_141437_2811_136013_2811_135856_446_6464
                        }
                      >
                        <View
                          style={
                            styles.View_I328_141437_2811_136013_2811_135856_446_6464_365_1753
                          }
                        >
                          <ImageBackground
                            source={{
                              uri:
                                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1c3b/efea/3a1a9b5276db845010599d8f072c78ee"
                            }}
                            style={
                              styles.ImageBackground_I328_141437_2811_136013_2811_135856_446_6464_352_2076
                            }
                          />
                          <View
                            style={
                              styles.View_I328_141437_2811_136013_2811_135856_446_6464_352_2077
                            }
                          />
                          <View
                            style={
                              styles.View_I328_141437_2811_136013_2811_135856_446_6464_352_2078
                            }
                          />
                        </View>
                      </View>
                    </View>
                    <View
                      style={
                        styles.View_I328_141437_2811_136013_2811_135856_446_6465
                      }
                    />
                  </View>
                </View>
                <View style={styles.View_I328_141437_2811_136013_2811_135857}>
                  <View style={styles.View_I328_141437_2811_136013_2811_135858}>
                    <Text
                      style={styles.Text_I328_141437_2811_136013_2811_135858}
                    >
                      Basic Info
                    </Text>
                  </View>
                </View>
              </View>
              <View style={styles.View_I328_141437_2811_136013_2811_135859}>
                <View
                  style={
                    styles.View_I328_141437_2811_136013_2811_135859_360_805
                  }
                >
                  <View
                    style={
                      styles.View_I328_141437_2811_136013_2811_135859_360_1026
                    }
                  >
                    <View
                      style={
                        styles.View_I328_141437_2811_136013_2811_135859_340_13
                      }
                    >
                      <View
                        style={
                          styles.View_I328_141437_2811_136013_2811_135859_340_13_363_10
                        }
                      >
                        <View
                          style={
                            styles.View_I328_141437_2811_136013_2811_135859_340_13_355_2741
                          }
                        />
                        <ImageBackground
                          source={{
                            uri:
                              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0680/1ba0/1789b15eeb6832174d1b12bb7e457ebe"
                          }}
                          style={
                            styles.ImageBackground_I328_141437_2811_136013_2811_135859_340_13_355_2742
                          }
                        />
                      </View>
                    </View>
                  </View>
                  <View
                    style={
                      styles.View_I328_141437_2811_136013_2811_135859_360_741
                    }
                  />
                </View>
              </View>
            </View>
          </View>
          <View style={styles.View_328_141438}>
            <View style={styles.View_I328_141438_2811_136039}>
              <View style={styles.View_I328_141438_2811_136039_2811_135855}>
                <View style={styles.View_I328_141438_2811_136039_2811_135856}>
                  <View
                    style={
                      styles.View_I328_141438_2811_136039_2811_135856_446_6462
                    }
                  >
                    <View
                      style={
                        styles.View_I328_141438_2811_136039_2811_135856_446_6463
                      }
                    >
                      <View
                        style={
                          styles.View_I328_141438_2811_136039_2811_135856_446_6464
                        }
                      >
                        <View
                          style={
                            styles.View_I328_141438_2811_136039_2811_135856_446_6464_2636_132501
                          }
                        >
                          <View
                            style={
                              styles.View_I328_141438_2811_136039_2811_135856_446_6464_2636_132500
                            }
                          >
                            <ImageBackground
                              source={{
                                uri:
                                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/622e/4ad7/54c52fd3666295a7d7d659e6de9ee6a4"
                              }}
                              style={
                                styles.ImageBackground_I328_141438_2811_136039_2811_135856_446_6464_2636_132497
                              }
                            />
                            <ImageBackground
                              source={{
                                uri:
                                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/653f/9282/ca3aba98aac953faf64d38abf37e5aa4"
                              }}
                              style={
                                styles.ImageBackground_I328_141438_2811_136039_2811_135856_446_6464_2636_132499
                              }
                            />
                          </View>
                          <ImageBackground
                            source={{
                              uri:
                                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a276/6551/17237d36d96c6673f69a1e9d0b2314e1"
                            }}
                            style={
                              styles.ImageBackground_I328_141438_2811_136039_2811_135856_446_6464_2636_132496
                            }
                          />
                        </View>
                      </View>
                    </View>
                    <View
                      style={
                        styles.View_I328_141438_2811_136039_2811_135856_446_6465
                      }
                    />
                  </View>
                </View>
                <View style={styles.View_I328_141438_2811_136039_2811_135857}>
                  <View style={styles.View_I328_141438_2811_136039_2811_135858}>
                    <Text
                      style={styles.Text_I328_141438_2811_136039_2811_135858}
                    >
                      Store Description
                    </Text>
                  </View>
                </View>
              </View>
              <View style={styles.View_I328_141438_2811_136039_2811_135859}>
                <View
                  style={
                    styles.View_I328_141438_2811_136039_2811_135859_360_805
                  }
                >
                  <View
                    style={
                      styles.View_I328_141438_2811_136039_2811_135859_360_1026
                    }
                  >
                    <View
                      style={
                        styles.View_I328_141438_2811_136039_2811_135859_340_13
                      }
                    >
                      <View
                        style={
                          styles.View_I328_141438_2811_136039_2811_135859_340_13_363_10
                        }
                      >
                        <View
                          style={
                            styles.View_I328_141438_2811_136039_2811_135859_340_13_355_2741
                          }
                        />
                        <ImageBackground
                          source={{
                            uri:
                              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0680/1ba0/1789b15eeb6832174d1b12bb7e457ebe"
                          }}
                          style={
                            styles.ImageBackground_I328_141438_2811_136039_2811_135859_340_13_355_2742
                          }
                        />
                      </View>
                    </View>
                  </View>
                  <View
                    style={
                      styles.View_I328_141438_2811_136039_2811_135859_360_741
                    }
                  />
                </View>
              </View>
            </View>
          </View>
          <View style={styles.View_328_141439}>
            <View style={styles.View_I328_141439_2811_136039}>
              <View style={styles.View_I328_141439_2811_136039_2811_135855}>
                <View style={styles.View_I328_141439_2811_136039_2811_135856}>
                  <View
                    style={
                      styles.View_I328_141439_2811_136039_2811_135856_446_6462
                    }
                  >
                    <View
                      style={
                        styles.View_I328_141439_2811_136039_2811_135856_446_6463
                      }
                    >
                      <View
                        style={
                          styles.View_I328_141439_2811_136039_2811_135856_446_6464
                        }
                      >
                        <View
                          style={
                            styles.View_I328_141439_2811_136039_2811_135856_446_6464_362_417
                          }
                        >
                          <View
                            style={
                              styles.View_I328_141439_2811_136039_2811_135856_446_6464_355_2804
                            }
                          />
                          <ImageBackground
                            source={{
                              uri:
                                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d554/2bd7/b1e9923f8a26001c5509c9231de3edfb"
                            }}
                            style={
                              styles.ImageBackground_I328_141439_2811_136039_2811_135856_446_6464_355_2805
                            }
                          />
                        </View>
                      </View>
                    </View>
                    <View
                      style={
                        styles.View_I328_141439_2811_136039_2811_135856_446_6465
                      }
                    />
                  </View>
                </View>
                <View style={styles.View_I328_141439_2811_136039_2811_135857}>
                  <View style={styles.View_I328_141439_2811_136039_2811_135858}>
                    <Text
                      style={styles.Text_I328_141439_2811_136039_2811_135858}
                    >
                      Connect Wallet
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ef69/0a65/81d191a11873368aed446d5b146d17a4"
          }}
          style={styles.ImageBackground_328_141440}
        />
      </View>
      <View style={styles.View_328_141528}>
        <Text style={styles.Text_328_141528}>Basic Information</Text>
      </View>
      <View style={styles.View_328_142196}>
        <View style={styles.View_328_141530}>
          <View style={styles.View_I328_141530_2843_183010}>
            <View style={styles.View_I328_141530_1662_94014}>
              <Text style={styles.Text_I328_141530_1662_94014}>Store Name</Text>
            </View>
          </View>
          <View style={styles.View_I328_141530_1662_94015}>
            <View style={styles.View_I328_141530_1662_94016}>
              <View style={styles.View_I328_141530_1662_94016_384_2217}>
                <View
                  style={styles.View_I328_141530_1662_94016_384_2217_383_1678}
                >
                  <Text
                    style={styles.Text_I328_141530_1662_94016_384_2217_383_1678}
                  >
                    Enter store name
                  </Text>
                </View>
              </View>
              <View style={styles.View_I328_141530_1662_94016_384_2218} />
            </View>
          </View>
        </View>
        <View style={styles.View_328_141531}>
          <View style={styles.View_328_141532}>
            <Text style={styles.Text_328_141532}>Select Category</Text>
          </View>
          <View style={styles.View_328_141533}>
            <View style={styles.View_328_141534}>
              <View style={styles.View_I328_141534_2467_130122}>
                <View style={styles.View_I328_141534_2467_130122_459_6660}>
                  <View style={styles.View_I328_141534_2467_130122_402_4487}>
                    <Text style={styles.Text_I328_141534_2467_130122_402_4487}>
                      ARWORK
                    </Text>
                  </View>
                </View>
                <View style={styles.View_I328_141534_2467_130122_402_4488}>
                  <View
                    style={styles.View_I328_141534_2467_130122_402_4488_328_55}
                  >
                    <Text
                      style={
                        styles.Text_I328_141534_2467_130122_402_4488_328_55
                      }
                    >
                      
                    </Text>
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.View_328_141535}>
              <View style={styles.View_I328_141535_1408_71925}>
                <View style={styles.View_I328_141535_1408_71925_340_106}>
                  <Text style={styles.Text_I328_141535_1408_71925_340_106}>
                    GAME ITEMS
                  </Text>
                </View>
              </View>
            </View>
            <View style={styles.View_328_141536}>
              <View style={styles.View_I328_141536_1408_71927}>
                <View style={styles.View_I328_141536_1408_71927_346_32}>
                  <Text style={styles.Text_I328_141536_1408_71927_346_32}>
                    MUSIC
                  </Text>
                </View>
              </View>
            </View>
            <View style={styles.View_328_141537}>
              <View style={styles.View_I328_141537_1408_71927}>
                <View style={styles.View_I328_141537_1408_71927_346_32}>
                  <Text style={styles.Text_I328_141537_1408_71927_346_32}>
                    VIDEOS
                  </Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.View_328_141588}>
            <View style={styles.View_328_141538}>
              <View style={styles.View_I328_141538_1408_71927}>
                <View style={styles.View_I328_141538_1408_71927_346_32}>
                  <Text style={styles.Text_I328_141538_1408_71927_346_32}>
                    PHOTOGRAPHY
                  </Text>
                </View>
              </View>
            </View>
            <View style={styles.View_328_141539}>
              <View style={styles.View_I328_141539_1408_71927}>
                <View style={styles.View_I328_141539_1408_71927_346_32}>
                  <Text style={styles.Text_I328_141539_1408_71927_346_32}>
                    COLLECTABLES
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_328_142197}>
        <View style={styles.View_328_141962}>
          <View style={styles.View_I328_141962_2843_183010}>
            <View style={styles.View_I328_141962_1662_94014}>
              <Text style={styles.Text_I328_141962_1662_94014}>
                Store sub-name
              </Text>
            </View>
          </View>
          <View style={styles.View_I328_141962_1662_94015}>
            <View style={styles.View_I328_141962_1662_94016}>
              <View style={styles.View_I328_141962_1662_94016_384_2217}>
                <View
                  style={styles.View_I328_141962_1662_94016_384_2217_383_1678}
                >
                  <Text
                    style={styles.Text_I328_141962_1662_94016_384_2217_383_1678}
                  >
                    Enter subname
                  </Text>
                </View>
              </View>
              <View style={styles.View_I328_141962_1662_94016_384_2218} />
            </View>
          </View>
        </View>
        <View style={styles.View_328_141963}>
          <View style={styles.View_328_141964}>
            <View style={styles.View_I328_141964_659_583}>
              <View style={styles.View_I328_141964_659_583_384_2835}>
                <View style={styles.View_I328_141964_659_583_384_2840}>
                  <View
                    style={styles.View_I328_141964_659_583_384_2840_383_1678}
                  >
                    <Text
                      style={styles.Text_I328_141964_659_583_384_2840_383_1678}
                    >
                      Add or select
                    </Text>
                  </View>
                </View>
              </View>
              <View style={styles.View_I328_141964_659_583_384_2841}>
                <View style={styles.View_I328_141964_659_583_384_3115}>
                  <View
                    style={styles.View_I328_141964_659_583_384_3115_2843_139204}
                  >
                    <View
                      style={
                        styles.View_I328_141964_659_583_384_3115_2843_139204_383_1667
                      }
                    >
                      <Text
                        style={
                          styles.Text_I328_141964_659_583_384_3115_2843_139204_383_1667
                        }
                      >
                        Select
                      </Text>
                    </View>
                    <View
                      style={
                        styles.View_I328_141964_659_583_384_3115_2843_139204_383_1797
                      }
                    >
                      <View
                        style={
                          styles.View_I328_141964_659_583_384_3115_2843_139204_383_1797_328_61
                        }
                      >
                        <Text
                          style={
                            styles.Text_I328_141964_659_583_384_3115_2843_139204_383_1797_328_61
                          }
                        >
                          
                        </Text>
                      </View>
                    </View>
                  </View>
                </View>
                <View style={styles.View_I328_141964_659_583_384_3157}>
                  <View
                    style={styles.View_I328_141964_659_583_384_3157_2843_139204}
                  >
                    <View
                      style={
                        styles.View_I328_141964_659_583_384_3157_2843_139204_383_1667
                      }
                    >
                      <Text
                        style={
                          styles.Text_I328_141964_659_583_384_3157_2843_139204_383_1667
                        }
                      >
                        Add
                      </Text>
                    </View>
                    <View
                      style={
                        styles.View_I328_141964_659_583_384_3157_2843_139204_383_1797
                      }
                    >
                      <View
                        style={
                          styles.View_I328_141964_659_583_384_3157_2843_139204_383_1797_328_61
                        }
                      >
                        <Text
                          style={
                            styles.Text_I328_141964_659_583_384_3157_2843_139204_383_1797_328_61
                          }
                        >
                          
                        </Text>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.View_328_141965}>
            <Text style={styles.Text_328_141965}>Keywords</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_328_142395}>
        <View style={styles.View_I328_142395_1414_160}>
          <View style={styles.View_I328_142395_1414_2}>
            <View style={styles.View_I328_142395_1414_2_343_26311}>
              <Text style={styles.Text_I328_142395_1414_2_343_26311}>Next</Text>
            </View>
            <View style={styles.View_I328_142395_1414_2_343_26312}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/698f/042d/4e87b077848042e67e62309440a03db6"
                }}
                style={
                  styles.ImageBackground_I328_142395_1414_2_343_26312_365_1686
                }
              />
            </View>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f1dc/3f8c/a00e78b1edcc9994ed7e976e97d2c725"
            }}
            style={styles.ImageBackground_I328_142395_1414_3}
          />
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("111%") },
  View_328_141408: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(238, 240, 248, 1)",
    overflow: "hidden"
  },
  View_328_141409: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("86%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I328_141409_492_5923: {
    flexGrow: 1,
    width: wp("9%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_328_141410: {
    width: wp("40%"),
    minWidth: wp("40%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("3%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I328_141410_2_34788: {
    flexGrow: 1,
    width: wp("10%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I328_141410_2_34788_2_34791: {
    flexGrow: 1,
    width: wp("10%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_328_141411: {
    width: wp("38%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_328_141411: {
    color: "rgba(33, 33, 33, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_328_141434: {
    width: wp("63%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18%"),
    top: hp("11%"),
    justifyContent: "flex-start"
  },
  Text_328_141434: {
    color: "rgba(47, 48, 68, 1)",
    fontSize: 16,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.4,
    textTransform: "none"
  },
  View_328_141435: {
    width: wp("89%"),
    minWidth: wp("89%"),
    height: hp("12%"),
    minHeight: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("17%")
  },
  View_328_141436: {
    width: wp("82%"),
    height: hp("10%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_328_141437: {
    width: wp("27%"),
    minWidth: wp("27%"),
    height: hp("10%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I328_141437_2811_136013: {
    flexGrow: 1,
    width: wp("27%"),
    height: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I328_141437_2811_136013_2811_135855: {
    flexGrow: 1,
    width: wp("9%"),
    height: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I328_141437_2811_136013_2811_135856: {
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I328_141437_2811_136013_2811_135856_446_6462: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I328_141437_2811_136013_2811_135856_446_6463: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I328_141437_2811_136013_2811_135856_446_6464: {
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I328_141437_2811_136013_2811_135856_446_6464_365_1753: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I328_141437_2811_136013_2811_135856_446_6464_352_2076: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I328_141437_2811_136013_2811_135856_446_6464_352_2077: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  View_I328_141437_2811_136013_2811_135856_446_6464_352_2078: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  View_I328_141437_2811_136013_2811_135856_446_6465: {
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(43, 165, 121, 1)"
  },
  View_I328_141437_2811_136013_2811_135857: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("5%")
  },
  View_I328_141437_2811_136013_2811_135858: {
    width: wp("9%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I328_141437_2811_136013_2811_135858: {
    color: "rgba(43, 165, 121, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I328_141437_2811_136013_2811_135859: {
    flexGrow: 1,
    width: wp("5%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%"),
    top: hp("4%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I328_141437_2811_136013_2811_135859_360_805: {
    flexGrow: 1,
    width: wp("5%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I328_141437_2811_136013_2811_135859_360_1026: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I328_141437_2811_136013_2811_135859_340_13: {
    width: wp("5%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I328_141437_2811_136013_2811_135859_340_13_363_10: {
    flexGrow: 1,
    width: wp("3%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("1%")
  },
  View_I328_141437_2811_136013_2811_135859_340_13_355_2741: {
    width: wp("3%"),
    height: hp("0%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  ImageBackground_I328_141437_2811_136013_2811_135859_340_13_355_2742: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  View_I328_141437_2811_136013_2811_135859_360_741: {
    width: wp("5%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(43, 165, 121, 1)"
  },
  View_328_141438: {
    width: wp("36%"),
    minWidth: wp("36%"),
    height: hp("10%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I328_141438_2811_136039: {
    flexGrow: 1,
    width: wp("36%"),
    height: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I328_141438_2811_136039_2811_135855: {
    flexGrow: 1,
    width: wp("18%"),
    height: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I328_141438_2811_136039_2811_135856: {
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I328_141438_2811_136039_2811_135856_446_6462: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I328_141438_2811_136039_2811_135856_446_6463: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I328_141438_2811_136039_2811_135856_446_6464: {
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I328_141438_2811_136039_2811_135856_446_6464_2636_132501: {
    flexGrow: 1,
    width: wp("5%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%")
  },
  View_I328_141438_2811_136039_2811_135856_446_6464_2636_132500: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I328_141438_2811_136039_2811_135856_446_6464_2636_132497: {
    width: wp("3%"),
    height: hp("1%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_I328_141438_2811_136039_2811_135856_446_6464_2636_132499: {
    width: wp("5%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I328_141438_2811_136039_2811_135856_446_6464_2636_132496: {
    width: wp("5%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I328_141438_2811_136039_2811_135856_446_6465: {
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(181, 181, 195, 1)"
  },
  View_I328_141438_2811_136039_2811_135857: {
    width: wp("18%"),
    minWidth: wp("18%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("5%")
  },
  View_I328_141438_2811_136039_2811_135858: {
    width: wp("18%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I328_141438_2811_136039_2811_135858: {
    color: "rgba(181, 181, 195, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I328_141438_2811_136039_2811_135859: {
    flexGrow: 1,
    width: wp("5%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29%"),
    top: hp("4%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I328_141438_2811_136039_2811_135859_360_805: {
    flexGrow: 1,
    width: wp("5%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I328_141438_2811_136039_2811_135859_360_1026: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I328_141438_2811_136039_2811_135859_340_13: {
    width: wp("5%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I328_141438_2811_136039_2811_135859_340_13_363_10: {
    flexGrow: 1,
    width: wp("3%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("1%")
  },
  View_I328_141438_2811_136039_2811_135859_340_13_355_2741: {
    width: wp("3%"),
    height: hp("0%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  ImageBackground_I328_141438_2811_136039_2811_135859_340_13_355_2742: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  View_I328_141438_2811_136039_2811_135859_360_741: {
    width: wp("5%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(181, 181, 195, 1)"
  },
  View_328_141439: {
    width: wp("19%"),
    minWidth: wp("19%"),
    height: hp("10%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("63%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I328_141439_2811_136039: {
    flexGrow: 1,
    width: wp("19%"),
    height: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I328_141439_2811_136039_2811_135855: {
    flexGrow: 1,
    width: wp("14%"),
    height: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I328_141439_2811_136039_2811_135856: {
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I328_141439_2811_136039_2811_135856_446_6462: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I328_141439_2811_136039_2811_135856_446_6463: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I328_141439_2811_136039_2811_135856_446_6464: {
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I328_141439_2811_136039_2811_135856_446_6464_362_417: {
    flexGrow: 1,
    width: wp("5%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%")
  },
  View_I328_141439_2811_136039_2811_135856_446_6464_355_2804: {
    width: wp("3%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  ImageBackground_I328_141439_2811_136039_2811_135856_446_6464_355_2805: {
    width: wp("5%"),
    height: hp("2%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I328_141439_2811_136039_2811_135856_446_6465: {
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(181, 181, 195, 1)"
  },
  View_I328_141439_2811_136039_2811_135857: {
    width: wp("14%"),
    minWidth: wp("14%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("5%")
  },
  View_I328_141439_2811_136039_2811_135858: {
    width: wp("14%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I328_141439_2811_136039_2811_135858: {
    color: "rgba(181, 181, 195, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_328_141440: {
    width: wp("89%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("12%")
  },
  View_328_141528: {
    width: wp("33%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("30%"),
    justifyContent: "flex-start"
  },
  Text_328_141528: {
    color: "rgba(108, 114, 147, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_328_142196: {
    width: wp("90%"),
    minWidth: wp("90%"),
    height: hp("26%"),
    minHeight: hp("26%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("36%")
  },
  View_328_141530: {
    width: wp("89%"),
    minWidth: wp("89%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("17%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I328_141530_2843_183010: {
    flexGrow: 1,
    width: wp("19%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I328_141530_1662_94014: {
    width: wp("19%"),
    minWidth: wp("19%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I328_141530_1662_94014: {
    color: "rgba(70, 78, 95, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I328_141530_1662_94015: {
    flexGrow: 1,
    width: wp("89%"),
    height: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I328_141530_1662_94016: {
    width: wp("89%"),
    minWidth: wp("89%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I328_141530_1662_94016_384_2217: {
    flexGrow: 1,
    width: wp("36%"),
    height: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I328_141530_1662_94016_384_2217_383_1678: {
    flexGrow: 1,
    width: wp("30%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_I328_141530_1662_94016_384_2217_383_1678: {
    color: "rgba(181, 181, 195, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I328_141530_1662_94016_384_2218: {
    flexGrow: 1,
    width: wp("11%"),
    height: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("79%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_328_141531: {
    width: wp("90%"),
    minWidth: wp("90%"),
    height: hp("15%"),
    minHeight: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_328_141532: {
    width: wp("26%"),
    minWidth: wp("26%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_328_141532: {
    color: "rgba(70, 78, 95, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_328_141533: {
    width: wp("90%"),
    minWidth: wp("90%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_328_141534: {
    width: wp("26%"),
    minWidth: wp("26%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I328_141534_2467_130122: {
    flexGrow: 1,
    width: wp("26%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(105, 147, 255, 1)",
    overflow: "hidden"
  },
  View_I328_141534_2467_130122_459_6660: {
    flexGrow: 1,
    width: wp("14%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("1%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I328_141534_2467_130122_402_4487: {
    width: wp("14%"),
    minWidth: wp("14%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I328_141534_2467_130122_402_4487: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I328_141534_2467_130122_402_4488: {
    flexGrow: 1,
    width: wp("4%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%"),
    top: hp("1%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I328_141534_2467_130122_402_4488_328_55: {
    flexGrow: 1,
    width: wp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I328_141534_2467_130122_402_4488_328_55: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_328_141535: {
    width: wp("24%"),
    minWidth: wp("24%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I328_141535_1408_71925: {
    flexGrow: 1,
    width: wp("24%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I328_141535_1408_71925_340_106: {
    flexGrow: 1,
    width: wp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I328_141535_1408_71925_340_106: {
    color: "rgba(181, 181, 195, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_328_141536: {
    width: wp("15%"),
    minWidth: wp("15%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("55%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I328_141536_1408_71927: {
    flexGrow: 1,
    width: wp("15%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I328_141536_1408_71927_346_32: {
    flexGrow: 1,
    width: wp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I328_141536_1408_71927_346_32: {
    color: "rgba(181, 181, 195, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_328_141537: {
    width: wp("16%"),
    minWidth: wp("16%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("73%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I328_141537_1408_71927: {
    flexGrow: 1,
    width: wp("16%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I328_141537_1408_71927_346_32: {
    flexGrow: 1,
    width: wp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I328_141537_1408_71927_346_32: {
    color: "rgba(181, 181, 195, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_328_141588: {
    width: wp("59%"),
    minWidth: wp("59%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("11%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_328_141538: {
    width: wp("29%"),
    minWidth: wp("29%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I328_141538_1408_71927: {
    flexGrow: 1,
    width: wp("29%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I328_141538_1408_71927_346_32: {
    flexGrow: 1,
    width: wp("24%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I328_141538_1408_71927_346_32: {
    color: "rgba(181, 181, 195, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_328_141539: {
    width: wp("28%"),
    minWidth: wp("28%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I328_141539_1408_71927: {
    flexGrow: 1,
    width: wp("28%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I328_141539_1408_71927_346_32: {
    flexGrow: 1,
    width: wp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I328_141539_1408_71927_346_32: {
    color: "rgba(181, 181, 195, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_328_142197: {
    width: wp("89%"),
    minWidth: wp("89%"),
    height: hp("20%"),
    minHeight: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("63%")
  },
  View_328_141962: {
    width: wp("89%"),
    minWidth: wp("89%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I328_141962_2843_183010: {
    flexGrow: 1,
    width: wp("27%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I328_141962_1662_94014: {
    width: wp("27%"),
    minWidth: wp("27%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I328_141962_1662_94014: {
    color: "rgba(70, 78, 95, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I328_141962_1662_94015: {
    flexGrow: 1,
    width: wp("89%"),
    height: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I328_141962_1662_94016: {
    width: wp("89%"),
    minWidth: wp("89%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I328_141962_1662_94016_384_2217: {
    flexGrow: 1,
    width: wp("33%"),
    height: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I328_141962_1662_94016_384_2217_383_1678: {
    flexGrow: 1,
    width: wp("27%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_I328_141962_1662_94016_384_2217_383_1678: {
    color: "rgba(181, 181, 195, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I328_141962_1662_94016_384_2218: {
    flexGrow: 1,
    width: wp("11%"),
    height: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("79%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_328_141963: {
    width: wp("89%"),
    minWidth: wp("89%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("11%")
  },
  View_328_141964: {
    width: wp("89%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I328_141964_659_583: {
    flexGrow: 1,
    width: wp("89%"),
    height: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  View_I328_141964_659_583_384_2835: {
    flexGrow: 1,
    width: wp("29%"),
    height: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I328_141964_659_583_384_2840: {
    width: wp("29%"),
    minWidth: wp("29%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I328_141964_659_583_384_2840_383_1678: {
    flexGrow: 1,
    width: wp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_I328_141964_659_583_384_2840_383_1678: {
    color: "rgba(181, 181, 195, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I328_141964_659_583_384_2841: {
    flexGrow: 1,
    width: wp("52%"),
    height: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I328_141964_659_583_384_3115: {
    width: wp("28%"),
    minWidth: wp("28%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I328_141964_659_583_384_3115_2843_139204: {
    flexGrow: 1,
    width: wp("28%"),
    height: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(243, 246, 249, 1)",
    overflow: "hidden"
  },
  View_I328_141964_659_583_384_3115_2843_139204_383_1667: {
    flexGrow: 1,
    width: wp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_I328_141964_659_583_384_3115_2843_139204_383_1667: {
    color: "rgba(70, 78, 95, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I328_141964_659_583_384_3115_2843_139204_383_1797: {
    flexGrow: 1,
    width: wp("5%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I328_141964_659_583_384_3115_2843_139204_383_1797_328_61: {
    flexGrow: 1,
    width: wp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I328_141964_659_583_384_3115_2843_139204_383_1797_328_61: {
    color: "rgba(70, 78, 95, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I328_141964_659_583_384_3157: {
    width: wp("24%"),
    minWidth: wp("24%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I328_141964_659_583_384_3157_2843_139204: {
    flexGrow: 1,
    width: wp("24%"),
    height: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(243, 246, 249, 1)",
    overflow: "hidden"
  },
  View_I328_141964_659_583_384_3157_2843_139204_383_1667: {
    flexGrow: 1,
    width: wp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_I328_141964_659_583_384_3157_2843_139204_383_1667: {
    color: "rgba(70, 78, 95, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I328_141964_659_583_384_3157_2843_139204_383_1797: {
    flexGrow: 1,
    width: wp("5%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I328_141964_659_583_384_3157_2843_139204_383_1797_328_61: {
    flexGrow: 1,
    width: wp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I328_141964_659_583_384_3157_2843_139204_383_1797_328_61: {
    color: "rgba(70, 78, 95, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_328_141965: {
    width: wp("16%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_328_141965: {
    color: "rgba(70, 78, 95, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_328_142395: {
    width: wp("26%"),
    minWidth: wp("26%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("69%"),
    top: hp("100%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I328_142395_1414_160: {
    flexGrow: 1,
    width: wp("26%"),
    height: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I328_142395_1414_2: {
    width: wp("26%"),
    minWidth: wp("26%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(105, 147, 255, 1)",
    overflow: "hidden"
  },
  View_I328_142395_1414_2_343_26311: {
    flexGrow: 1,
    width: wp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I328_142395_1414_2_343_26311: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I328_142395_1414_2_343_26312: {
    flexGrow: 1,
    width: wp("5%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%"),
    top: hp("1%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I328_142395_1414_2_343_26312_365_1686: {
    flexGrow: 1,
    width: wp("5%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I328_142395_1414_3: {
    flexGrow: 1,
    width: wp("26%"),
    height: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
